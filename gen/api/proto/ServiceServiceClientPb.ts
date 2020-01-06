/**
 * @fileoverview gRPC-Web generated client stub for api
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';

import {
  ProtoRequest,
  ProtoResponse} from './service_pb';

export class ProtoServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoReplyHello = new grpcWeb.AbstractClientBase.MethodInfo(
    ProtoResponse,
    (request: ProtoRequest) => {
      return request.serializeBinary();
    },
    ProtoResponse.deserializeBinary
  );

  replyHello(
    request: ProtoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ProtoResponse) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/api.ProtoService/ReplyHello',
      request,
      metadata || {},
      this.methodInfoReplyHello,
      callback);
  }

}

