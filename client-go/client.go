package main

import (
  "context"
	"time"
	"os"
	"log"

	"github.com/golang/protobuf/proto"

	grpc "google.golang.org/grpc"
	pb "github.com/celsosantos/gloo-playground/api"
)

const (
	localAddr		= "localhost:9001"
)

func main() {
	
	// address := os.Getenv("PLAYGROUND_GLOO_PLAYGROUND_SERVICE_HOST") + 
	// ":" + os.Getenv("PLAYGROUND_GLOO_PLAYGROUND_SERVICE_PORT")

	address := "https://apis.example.com/grpc-demo/"

	if address == "" || address == ":"{
		address = localAddr
	}

	log.Printf("Dialing %s", address)
	conn, err := grpc.Dial(
		address,
		grpc.WithInsecure(),
		grpc.WithBlock(),
		grpc.WithTimeout(15*time.Second),
	)
	
	if err != nil {
		log.Fatalf("Could not connect to gRPC service: %s", err)
	}

	defer conn.Close()

	client := pb.NewProtoServiceClient(conn)
	returnValue, err := client.ReplyHello(
		context.Background(), 
		&pb.ProtoRequest{},
	)

	if err != nil{
		log.Fatalf("[ERROR] %s", err)
	}

	t := proto.TextMarshaler{}
	t.Marshal(os.Stdout, returnValue)
}