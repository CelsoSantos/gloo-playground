workspace(
    name = "gloo_playground",
    managed_directories = {
        "@npm": ["node_modules"],
        "@addin_npm": ["addin/node_modules"],
        "@addin_client_npm": ["gen/api/proto/node_modules"],
    },
)

# -----------------------------------------------------------------------------
# Global variables
# -----------------------------------------------------------------------------

# Requisite minimal Golang toolchain version
MINIMAL_GOLANG_VERSION = "1.12.4"

# Requisite minimal Bazel version requested to build this project
MINIMAL_BAZEL_VERSION = "0.23.0"

# Requisite minimal Gazelle version compatible with Golang Bazel rules
MINIMAL_GAZELLE_VERSION = "0.18.1"

# Requisite minimal Golang Bazel rules (must be set in accordance with minimal Gazelle version)
#
# @see https://github.com/bazelbuild/bazel-gazelle#compatibility)
MINIMAL_GOLANG_BAZEL_RULES_VERSION = "0.19.0"

MINIMAL_GOLANG_BAZEL_RULES_SHASUM = "9fb16af4d4836c8222142e54c9efa0bb5fc562ffc893ce2abeac3e25daead144"

# -----------------------------------------------------------------------------
# Basic Bazel settings
# -----------------------------------------------------------------------------

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

# Import Bazel Skylib repository into the workspace
http_archive(
    name = "bazel_skylib",
    sha256 = "97e70364e9249702246c0e9444bccdc4b847bed1eb03c5a3ece4f83dfe6abc44",
    urls = ["https://github.com/bazelbuild/bazel-skylib/releases/download/1.0.2/bazel-skylib-1.0.2.tar.gz"],
)

load("@bazel_skylib//:workspace.bzl", "bazel_skylib_workspace")

bazel_skylib_workspace()

load("@bazel_skylib//lib:versions.bzl", "versions")

versions.check(
    minimum_bazel_version = MINIMAL_BAZEL_VERSION,
)

# -----------------------------------------------------------------------------
# Golang and gRPC tools and external dependencies
# -----------------------------------------------------------------------------

# Fetch Protobuf dependencies
http_archive(
    name = "rules_proto",
    sha256 = "73ebe9d15ba42401c785f9d0aeebccd73bd80bf6b8ac78f74996d31f2c0ad7a6",
    strip_prefix = "rules_proto-2c0468366367d7ed97a1f702f9cd7155ab3f73c5",
    urls = ["https://github.com/bazelbuild/rules_proto/archive/2c0468366367d7ed97a1f702f9cd7155ab3f73c5.tar.gz"],
)

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

# Fetch gRPC and Protobuf dependencies (should be fetched before Go rules)
http_archive(
    name = "build_stack_rules_proto",
    sha256 = "966316838b6454ca2f51718d6a801f8ebf7d1d41c82a51ac24af4d92115fa323",
    strip_prefix = "rules_proto-0a888dbeacebfe06acb7ba740e0723b1adb0dd52",
    urls = ["https://github.com/stackb/rules_proto/archive/0a888dbeacebfe06acb7ba740e0723b1adb0dd52.tar.gz"],
)

load("@build_stack_rules_proto//go:deps.bzl", "go_grpc_library")

go_grpc_library()

# Import Golang Bazel repository into the workspace
http_archive(
    name = "io_bazel_rules_go",
    sha256 = "e88471aea3a3a4f19ec1310a55ba94772d087e9ce46e41ae38ecebe17935de7b",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/rules_go/releases/download/v0.20.3/rules_go-v0.20.3.tar.gz",
        "https://github.com/bazelbuild/rules_go/releases/download/v0.20.3/rules_go-v0.20.3.tar.gz",
    ],
)

# Fetch Golang dependencies.
#
# The 'go_rules_dependencies()' is a macro that registers external dependencies needed by
# the Go and proto rules in rules_go.
# You can override a dependency declared in go_rules_dependencies by declaring a repository
# rule in WORKSPACE with the same name BEFORE the call to 'go_rules_dependencies()' macro.
#
# You can find the full implementation in repositories.bzl availble at https://github.com/bazelbuild/rules_go/blob/master/go/private/repositories.bzl.
#
# @see: https://github.com/bazelbuild/rules_go/blob/master/go/workspace.rst#id5
load("@io_bazel_rules_go//go:deps.bzl", "go_register_toolchains", "go_rules_dependencies")

# NOTE:
# To override dependencies declared in 'go_rules_dependencies' macro, you should
# declare your dependencies here, before invoking 'go_rules_dependencies' macro.

# Fetch external dependencies needed by the Go and proto rules in rules_go, as
# well as some basic Golang packages, such as, for instance, 'golang.org/x/text'
# i18n tool.
go_rules_dependencies()

go_register_toolchains()
#  go_version = MINIMAL_GOLANG_VERSION,
#)

# -----------------------------------------------------------------------------
# NodeJS tools and external dependencies
# -----------------------------------------------------------------------------

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "e1a0d6eb40ec89f61a13a028e7113aa3630247253bcb1406281b627e44395145",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.0.1/rules_nodejs-1.0.1.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

yarn_install(
    # Name this npm so that Bazel Label references look like @npm//package
    name = "addin_npm",
    package_json = "//addin:package.json",
    yarn_lock = "//addin:yarn.lock",
)

yarn_install(
    name = "addin_client_npm",
    package_json = "//gen/api/proto:package.json",
    yarn_lock = "//gen/api/proto:yarn.lock",
)

load("@addin_npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

load("@addin_client_npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()

# load("@npm_bazel_typescript//:index.bzl", "ts_setup_workspace")

# ts_setup_workspace()

# -----------------------------------------------------------------------------
# Bazel Gazelle build files generator settings
# -----------------------------------------------------------------------------

# Import Gazelle repository into the workspace
http_archive(
    name = "bazel_gazelle",
    sha256 = "86c6d481b3f7aedc1d60c1c211c6f76da282ae197c3b3160f54bd3a8f847896f",
    urls = [
        "https://storage.googleapis.com/bazel-mirror/github.com/bazelbuild/bazel-gazelle/releases/download/v0.19.1/bazel-gazelle-v0.19.1.tar.gz",
        "https://github.com/bazelbuild/bazel-gazelle/releases/download/v0.19.1/bazel-gazelle-v0.19.1.tar.gz",
    ],
)

# Fetch Gazelle dependencies
load("@bazel_gazelle//:deps.bzl", "gazelle_dependencies")

gazelle_dependencies()

# -----------------------------------------------------------------------------
# Docker Bazel rules dependencies
# -----------------------------------------------------------------------------

# Import the rules_docker repository at release v0.7.0 - be sure the Go rules
# are previously loaded - see above Go rules section in this file
http_archive(
    name = "io_bazel_rules_docker",
    sha256 = "df13123c44b4a4ff2c2f337b906763879d94871d16411bf82dcfeba892b58607",
    strip_prefix = "rules_docker-0.13.0",
    urls = ["https://github.com/bazelbuild/rules_docker/releases/download/v0.13.0/rules_docker-v0.13.0.tar.gz"],
)

# Load the macro that allows you to customize the docker toolchain configuration.
load(
    "@io_bazel_rules_docker//toolchains/docker:toolchain.bzl",
    docker_toolchain_configure = "toolchain_configure",
)

docker_toolchain_configure(
    name = "docker_config",
    # Replace this with a path to a directory which has a custom docker client
    # config.json. Docker allows you to specify custom authentication credentials
    # in the client configuration JSON file.
    # See https://docs.docker.com/engine/reference/commandline/cli/#configuration-files
    # for more details.
    #
    # IMPORTANT: This path is relative to the sandbox workspace directory
    client_config = "/workspaces/gloo-playground/tooling/docker",
)

load(
    "@io_bazel_rules_docker//go:image.bzl",
    _go_image_repos = "repositories",
)

_go_image_repos()

# -----------------------------------------------------------------------------
# External dependencies
# -----------------------------------------------------------------------------

load("//tooling/bazel:dependencies.bzl", "ext_dependencies")

ext_dependencies()
