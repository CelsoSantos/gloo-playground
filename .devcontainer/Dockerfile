###############################################################################
# .devcontainer/Dockerfile.go                                                 #
#                                                                             #
# Description: Docker image used by VSCode for building a Golang development  #
#              sandbox.                                                       #
# See:         https://code.visualstudio.com/docs/remote/containers           #
###############################################################################


# -----------------------------------------------------------------------------
# BUILD-TIME VARIABLES
#
# Unfortunately, build-time arguments cannot be given in the devcontainer.json 
# file. This feature will certainly be available soon... so let's be prepared.
# -----------------------------------------------------------------------------

ARG ARG_BAZEL_VERSION=1.2.1


# -----------------------------------------------------------------------------
# SANDBOX STAGE
# -----------------------------------------------------------------------------

FROM golang:1.12.7-stretch

ARG ARG_BAZEL_VERSION

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Configure APT, install packages and tools
RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
	apt-utils \
	bash-completion \
	curl \
	g++ \
	git \
	lsb-release \
	patch \
	procps \
	unzip \
	zlib1g-dev \
	#
	# Install Bazel
	&& curl -LO "https://github.com/bazelbuild/bazel/releases/download/$ARG_BAZEL_VERSION/bazel_$ARG_BAZEL_VERSION-linux-x86_64.deb" \
	&& dpkg -i bazel_*.deb \
	&& rm -rf bazel_*.deb \
	#
	# Install Gocode autocomplemention deamon
	&& go get -x -d github.com/stamblerre/gocode 2>&1 \
	&& go build -o gocode-gomod github.com/stamblerre/gocode \
	&& mv gocode-gomod $GOPATH/bin/ \
	#
	# Install various Go tools
	&& go get -u -v \
	github.com/bazelbuild/buildtools/buildifier \
	github.com/bazelbuild/bazel-gazelle/cmd/gazelle \
	github.com/mdempsky/gocode \
	github.com/uudashr/gopkgs/cmd/gopkgs \
	github.com/ramya-rao-a/go-outline \
	github.com/acroca/go-symbols \
	github.com/godoctor/godoctor \
	golang.org/x/tools/cmd/guru \
	golang.org/x/tools/cmd/gorename \
	github.com/rogpeppe/godef \
	github.com/zmb3/gogetdoc \
	github.com/haya14busa/goplay/cmd/goplay \
	github.com/sqs/goreturns \
	github.com/josharian/impl \
	github.com/davidrjenni/reftools/cmd/fillstruct \
	github.com/fatih/gomodifytags \
	github.com/cweill/gotests/... \
	golang.org/x/tools/cmd/goimports \
	golang.org/x/lint/golint \
	golang.org/x/tools/gopls \
	github.com/alecthomas/gometalinter \
	honnef.co/go/tools/... \
	github.com/golangci/golangci-lint/cmd/golangci-lint \
	github.com/mgechev/revive \
	github.com/bazelbuild/bazelisk \
	github.com/go-delve/delve/cmd/dlv 2>&1 \
	#
	# Clean up
	&& apt-get autoremove -y \
	&& apt-get clean -y \
	&& rm -rf /var/lib/apt/lists/*

# -----------------------------------------------------------------------------
# Installing Node base tools for VueJS
# We need to setup this because we can't use "FROM node:10" as our base image (base image needs to support Golang)
# base on: https://github.com/nodejs/docker-node/blob/f8f2384f7edc345f5ffc0496458005981b512882/10/stretch/Dockerfile
# -----------------------------------------------------------------------------

RUN groupadd --gid 1000 node \
	&& useradd --uid 1000 --gid node --shell /bin/bash --create-home node

ENV NODE_VERSION 10.16.0

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
	xz-utils

RUN ARCH= && dpkgArch="$(dpkg --print-architecture)" \
	&& case "${dpkgArch##*-}" in \
	amd64) ARCH='x64';; \
	ppc64el) ARCH='ppc64le';; \
	s390x) ARCH='s390x';; \
	arm64) ARCH='arm64';; \
	armhf) ARCH='armv7l';; \
	i386) ARCH='x86';; \
	*) echo "unsupported architecture"; exit 1 ;; \
	esac \
	# gpg keys listed at https://github.com/nodejs/node#release-keys
	&& set -ex \
	&& for key in \
	94AE36675C464D64BAFA68DD7434390BDBE9B9C5 \
	FD3A5288F042B6850C66B31F09FE44734EB7990E \
	71DCFD284A79C3B38668286BC97EC7A07EDE3FC1 \
	DD8F2338BAE7501E3DD5AC78C273792F7D83545D \
	C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8 \
	B9AE9905FFD7803F25714661B63B535A4C206CA9 \
	77984A986EBC2AA786BC0F66B01FBB92821C587A \
	8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 \
	4ED778F539E3634C779C87C6D7062848A1AB005C \
	A48C2BEE680E841632CD4E44F07496B3EB3C1762 \
	B9E2F5981AA6E0CD28160D9FF13993A75599653C \
	; do \
	gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
	gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
	gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key" ; \
	done \
	&& curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
	&& curl -fsSLO --compressed "https://nodejs.org/dist/v$NODE_VERSION/SHASUMS256.txt.asc" \
	&& gpg --batch --decrypt --output SHASUMS256.txt SHASUMS256.txt.asc \
	&& grep " node-v$NODE_VERSION-linux-$ARCH.tar.xz\$" SHASUMS256.txt | sha256sum -c - \
	&& tar -xJf "node-v$NODE_VERSION-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
	&& rm "node-v$NODE_VERSION-linux-$ARCH.tar.xz" SHASUMS256.txt.asc SHASUMS256.txt \
	&& ln -s /usr/local/bin/node /usr/local/bin/nodejs

ENV YARN_VERSION 1.16.0

RUN set -ex \
	&& for key in \
	6A010C5166006599AA17F08146C2130DFD2497F5 \
	; do \
	gpg --batch --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys "$key" || \
	gpg --batch --keyserver hkp://ipv4.pool.sks-keyservers.net --recv-keys "$key" || \
	gpg --batch --keyserver hkp://pgp.mit.edu:80 --recv-keys "$key" ; \
	done \
	&& curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
	&& curl -fsSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz.asc" \
	&& gpg --batch --verify yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz \
	&& mkdir -p /opt \
	&& tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
	&& ln -s /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
	&& ln -s /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
	&& rm yarn-v$YARN_VERSION.tar.gz.asc yarn-v$YARN_VERSION.tar.gz

COPY docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

CMD [ "node" ]


# -----------------------------------------------------------------------------
# SANDBOX STAGE for VueJS
# -----------------------------------------------------------------------------

RUN apt-get update \
	&& apt-get -y install --no-install-recommends apt-utils 2>&1 \ 
	#
	# Verify git and needed tools are installed
	&& apt-get install -y git procps \
	#
	# Remove outdated yarn from /opt and install via package 
	# so it can be easily updated via apt-get upgrade yarn
	&& rm -rf /opt/yarn-* \
	&& rm -f /usr/local/bin/yarn \
	&& rm -f /usr/local/bin/yarnpkg \
	&& apt-get install -y curl apt-transport-https lsb-release \
	&& curl -sS https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/pubkey.gpg | apt-key add - 2>/dev/null \
	&& echo "deb https://dl.yarnpkg.com/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
	&& apt-get update \
	&& apt-get -y install --no-install-recommends yarn \
	#
	# Install eslint globally
	&& yarn global add eslint \
	# Install clasp globally (to develop Google Apps Scripts in local IDE)
	&& yarn global add @google/clasp \
	#
	# Clean up
	&& apt-get autoremove -y \
	&& apt-get clean -y \
	&& rm -rf /var/lib/apt/lists/*