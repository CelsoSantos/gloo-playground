# Gloo Playground

This repo contains sample code intended to be used for debugging and testing Gloo's Proxy.

The present code creates a KNative Service which exposes both HTTP and gRPC endpoints (with the help of [`cmux`][1]).

---

## Tech Stack

- [Gloo][2]
- [Knative][3]
- [Terraform][4]

## Repo Structure

- `addin`: A Microsoft Word Add-In intended to test gRPC-Web integration. (It's still a WIP)
- `api/proto/`: Contains the proto definitions
- `client-go/`: Contains a deployable gRPC client
- `gen/api/proto`: `protoc-grpc-web` generated artifacts
- `gloo/`: Contains the virtual services for deployment onto K8s
- `helm/`: The Helm Charts that deploy the services as K8s `Deployment`s
  - `companion`: The playground companion add (MS Word Add-in to test gRPC-Web request)
  - `gloo-playground`: The playground server
  - `playground-cli`: The gRPC client for the playground
- `knative/`: Contains the Knative `Service` Spec `service.yaml` to deploy onto K8s
- `libs`: Contains extensions/helper libraries
  - `kncloudevents`: A library that implements CNCF CloudEvents spec
- `src/`: Contains the code that is executed on the server container
- `tooling/`:
  - `bazel/`: Contains the bazel dependencies and configurations
  - `docker/`: Contains the files required to build the sandbox Docker images. It also **MUST** contain you Docker Hub credentials if you intend to push images to your repo
  - `minikube/`: Contains the scripts to setup and prepare a Minikube VM for development/testing purposes
- `playground.tf`: The Terraform deployment for the services via the Helm Chart (*WARNING:* The Terraform Helm provider does not yet fully support Helm 3)

---

## Deployment

In order to deploy the service into K8s execute the following command:

### Knative Service

In order to deploy the service into K8s as a Knative `Service` execute the following command:

<!-- TODO -->
```bash
kubectl apply -f knative/service.yaml
```

### Kubernetes Deployment + Service

In order to deploy the service into K8s as a K8s `Deployment` + `Service` execute there are two options available:

- Helm3
- Terraform

To use Helm directly:

```bash
helm install NAME helm/COMPONENT -f helm/COMPONENT/values.yaml --namespace default
```

If instead you want to use Terraform, then, from the root of the project simply init Terraform and apply:

```bash
terraform init

terraform apply (OPTIONALLY: -auto-approve)
```

### Gloo Resources

Once the service is deployed, use `glooctl` to get the name of the `Upstream` associated with the Knative Service on your cluster and lookup the `Upstream` on port 80 (HTTP to gRPC conversion) which should be something like `NAMESPACE-COMPONENT_NAME-PORT`

```bash
glooctl get upstreams
```

Now you can deploy the `VirtualService` replacing the `.spec.VirtualHost.routes.matcher.routeAction.single.upstream.name` with the `Upstream` name you got on the previous step
Alternatively, you can define the `Upstream` spec and name and use a predefined name (the one assigned to the `Upstream`)

```bash
kubectl apply -f glooctl/virtualservice-$(VERSION).yaml
```

Verify the `VirtualService` was properly created and is in `Accepted` state

```bash
glooctl get virtualservices
```

---

## Testing & Executing

If you use Visual Studio Code and the [REST Client Extension][5], then you can use the `rest-client.http` file to execute the requests to the service, on both gRPC and HTTP endpoints

---

## Development

For your convenience, there is a `Makefile` available that provides a sandboxed build environment (Docker container) complete with Bazel and Gazelle, that is capable of building the required binaries and Docker images to test and deploy the services into a K8s cluster.

In order to be able to use `make` you will have to create a `Makefile.conf` file. Use the provided `Makefile.conf.sample` to get you started. Once done, you can executing `make` commands.

To setup the build environment just run:

```bash
make setup
```

To use the build environment use

```bash
make work
```

## Using Bazel

Bazel is the build system/platform used to build libraries, binaries, container images and packaging everything for deployment. The provided sandbox already has bazel installed so you can just start using it.

### - Building the binary

On the sandbox project root directory (`/workspace`) execute the following command:

```bash
bazel build //:mux_function
```

### - Building the Docker Container

> __NOTE__: In order to be able to push images, there must exist a `config.json` file in the `tooling/docker` directory with your Docker credentials. Use the `tooling/docker/registry.config.json.sample` as a starting point to create your own credentials file.

To use Bazel to build and push a Docker image execute this command:

```bash
bazel run //:mux_image_push --define DOCKER_REGISTRY_IMAGE_NAME=$DOCKER_REGISTRY_IMAGE_NAME
```

[1]: https://github.com/soheilhy/cmux
[2]: https://www.solo.io/glooe
[3]: https://knative.dev
[4]: https://www.terraform.io/
[5]: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
