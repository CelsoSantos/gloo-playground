###########################
# SERVER
###########################

# resource "helm_release" "playground_server" {
#   name      = "playground-server"
#   namespace = "default"
#   chart     = "./helm/gloo-playground"
#   values = [
#     "${file("./helm/gloo-playground/values.yaml")}"
#   ]
# }

resource "null_resource" "helm_install_playground_server" {
  provisioner "local-exec" {
    # environment = {
    #   KUBECONFIG = "${path.root}/creds/config"
    # }
    command = "/usr/local/bin/helm install playground --atomic -f ${path.module}/helm/gloo-playground/values.yaml ${path.module}/helm/gloo-playground/ --namespace default"
  }
}

###########################
# CLI
###########################

# resource "helm_release" "playground_cli" {
#   name      = "playground-cli"
#   namespace = "default"
#   chart     = "./helm/playground-cli"
#   values = [
#     "${file("./helm/playground-cli/values.yaml")}"
#   ]
# }

resource "null_resource" "helm_install_playground_cli" {
  provisioner "local-exec" {
    # environment = {
    #   KUBECONFIG = "${path.root}/creds/config"
    # }
    command = "/usr/local/bin/helm install playground-cli --atomic -f ${path.module}/helm/playground-cli/values.yaml ${path.module}/helm/playground-cli/ --namespace default"
  }
}

###########################
# COMPANION
###########################

# resource "helm_release" "playground-companion" {
#   name      = "playground-companion"
#   namespace = "default"
#   chart     = "./helm/companion"
#   values = [
#     "${file("./helm/companion/values.yaml")}"
#   ]
# }


resource "null_resource" "playground-companion" {
  provisioner "local-exec" {
    # environment = {
    #   KUBECONFIG = "${path.root}/creds/config"
    # }
    command = "/usr/local/bin/helm install playground-companion --atomic -f ${path.module}/helm/companion/values.yaml ${path.module}/helm/companion/ --namespace default"
  }
}
