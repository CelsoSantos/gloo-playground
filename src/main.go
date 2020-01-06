package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"

	"github.com/soheilhy/cmux"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	kncloudevents "github.com/celsosantos/gloo-playground/libs/kncloudevents"
	cloudevents "github.com/cloudevents/sdk-go"

	pb "github.com/celsosantos/gloo-playground/api"
)

var (
	ctx = context.Background()

	// Make Channel to receive end-result
	someChannel = make(chan string)
)

type Return struct {
	Msg string
}

type protoService struct{}

func (c *protoService) ReplyHello(ctx context.Context, in *pb.ProtoRequest) (*pb.ProtoResponse, error) {
	return &pb.ProtoResponse{Message: "[gRPC] Hello gRPC World!"}, nil
}

func render(event cloudevents.Event) {

	log.Println("GOT AN EVENT!!! YAY!!!")
	if event.Data == nil {
		log.Fatalf("Missing event data.")
	}

	someChannel <- "[Channel] Hello World!"
}

func HelloServer(w http.ResponseWriter, r *http.Request) {
	msg := Return{"[HTTP] Hello World"}

	json, err := json.Marshal(msg)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(json)
}

func main() {

	port, err := strconv.Atoi(os.Getenv("LISTEN_PORT"))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// create a listener on TCP port
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	// Create multiplexer and listener types
	mux := cmux.New(lis)
	grpcLis := mux.Match(cmux.HTTP2())
	httpLis := mux.Match(cmux.HTTP1())

	// Link the endpoint to the handler function.
	http.HandleFunc("/http-demo/", HelloServer)

	// *************
	// gRPC
	// *************

	// create a gRPC server object
	grpcServer := grpc.NewServer()

	// create server
	pb.RegisterProtoServiceServer(grpcServer, &protoService{})

	//reflection required for Gloo Discovery
	reflection.Register(grpcServer)

	// *************
	// HTTP
	// *************

	// Declare new CloudEvents Receiver
	c, err := kncloudevents.NewDefaultClient(httpLis)
	if err != nil {
		log.Fatal("Failed to create client, ", err)
	}

	defer close(someChannel)

	// *************
	// Start Listeners
	// *************

	// start gRPC server
	go func() {
		if err := grpcServer.Serve(grpcLis); err != nil {
			log.Fatalf("failed to serve: %s", err)
		}
	}()

	// start HTTP server
	go func() {
		log.Fatal(c.StartReceiver(ctx, render))
	}()

	mux.Serve()
}
