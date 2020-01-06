/**
 * @fileoverview gRPC-Web generated client stub for api.proto.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.api = {};
proto.api.proto = {};
proto.api.proto.v1 = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.proto.v1.StoryServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.api.proto.v1.StoryServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.GetStoryByPresentationIDRequest,
 *   !proto.api.proto.v1.GetStoryByPresentationIDResponse>}
 */
const methodDescriptor_StoryService_GetStoryByPresentationId = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/GetStoryByPresentationId',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.GetStoryByPresentationIDRequest,
  proto.api.proto.v1.GetStoryByPresentationIDResponse,
  /**
   * @param {!proto.api.proto.v1.GetStoryByPresentationIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetStoryByPresentationIDResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.GetStoryByPresentationIDRequest,
 *   !proto.api.proto.v1.GetStoryByPresentationIDResponse>}
 */
const methodInfo_StoryService_GetStoryByPresentationId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.GetStoryByPresentationIDResponse,
  /**
   * @param {!proto.api.proto.v1.GetStoryByPresentationIDRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetStoryByPresentationIDResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.GetStoryByPresentationIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.GetStoryByPresentationIDResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.GetStoryByPresentationIDResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.getStoryByPresentationId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetStoryByPresentationId',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetStoryByPresentationId,
      callback);
};


/**
 * @param {!proto.api.proto.v1.GetStoryByPresentationIDRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.GetStoryByPresentationIDResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.getStoryByPresentationId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetStoryByPresentationId',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetStoryByPresentationId);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.GetMappingRulesRequest,
 *   !proto.api.proto.v1.GetMappingRulesResponse>}
 */
const methodDescriptor_StoryService_GetMappingRules = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/GetMappingRules',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.GetMappingRulesRequest,
  proto.api.proto.v1.GetMappingRulesResponse,
  /**
   * @param {!proto.api.proto.v1.GetMappingRulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetMappingRulesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.GetMappingRulesRequest,
 *   !proto.api.proto.v1.GetMappingRulesResponse>}
 */
const methodInfo_StoryService_GetMappingRules = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.GetMappingRulesResponse,
  /**
   * @param {!proto.api.proto.v1.GetMappingRulesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetMappingRulesResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.GetMappingRulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.GetMappingRulesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.GetMappingRulesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.getMappingRules =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetMappingRules',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetMappingRules,
      callback);
};


/**
 * @param {!proto.api.proto.v1.GetMappingRulesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.GetMappingRulesResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.getMappingRules =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetMappingRules',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetMappingRules);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.GetStoriesRequest,
 *   !proto.api.proto.v1.GetStoriesResponse>}
 */
const methodDescriptor_StoryService_GetStories = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/GetStories',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.GetStoriesRequest,
  proto.api.proto.v1.GetStoriesResponse,
  /**
   * @param {!proto.api.proto.v1.GetStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetStoriesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.GetStoriesRequest,
 *   !proto.api.proto.v1.GetStoriesResponse>}
 */
const methodInfo_StoryService_GetStories = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.GetStoriesResponse,
  /**
   * @param {!proto.api.proto.v1.GetStoriesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetStoriesResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.GetStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.GetStoriesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.GetStoriesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.getStories =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetStories',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetStories,
      callback);
};


/**
 * @param {!proto.api.proto.v1.GetStoriesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.GetStoriesResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.getStories =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetStories',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetStories);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.GetStoryByIdRequest,
 *   !proto.api.proto.v1.GetStoryByIdResponse>}
 */
const methodDescriptor_StoryService_GetStoryById = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/GetStoryById',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.GetStoryByIdRequest,
  proto.api.proto.v1.GetStoryByIdResponse,
  /**
   * @param {!proto.api.proto.v1.GetStoryByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetStoryByIdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.GetStoryByIdRequest,
 *   !proto.api.proto.v1.GetStoryByIdResponse>}
 */
const methodInfo_StoryService_GetStoryById = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.GetStoryByIdResponse,
  /**
   * @param {!proto.api.proto.v1.GetStoryByIdRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.GetStoryByIdResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.GetStoryByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.GetStoryByIdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.GetStoryByIdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.getStoryById =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetStoryById',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetStoryById,
      callback);
};


/**
 * @param {!proto.api.proto.v1.GetStoryByIdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.GetStoryByIdResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.getStoryById =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/GetStoryById',
      request,
      metadata || {},
      methodDescriptor_StoryService_GetStoryById);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.SaveDraftRequest,
 *   !proto.api.proto.v1.SaveDraftResponse>}
 */
const methodDescriptor_StoryService_SaveDraft = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/SaveDraft',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.SaveDraftRequest,
  proto.api.proto.v1.SaveDraftResponse,
  /**
   * @param {!proto.api.proto.v1.SaveDraftRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.SaveDraftResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.SaveDraftRequest,
 *   !proto.api.proto.v1.SaveDraftResponse>}
 */
const methodInfo_StoryService_SaveDraft = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.SaveDraftResponse,
  /**
   * @param {!proto.api.proto.v1.SaveDraftRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.SaveDraftResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.SaveDraftRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.SaveDraftResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.SaveDraftResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.saveDraft =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/SaveDraft',
      request,
      metadata || {},
      methodDescriptor_StoryService_SaveDraft,
      callback);
};


/**
 * @param {!proto.api.proto.v1.SaveDraftRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.SaveDraftResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.saveDraft =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/SaveDraft',
      request,
      metadata || {},
      methodDescriptor_StoryService_SaveDraft);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.CreatePreviewRequest,
 *   !proto.api.proto.v1.CreatePreviewResponse>}
 */
const methodDescriptor_StoryService_CreatePreview = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/CreatePreview',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.CreatePreviewRequest,
  proto.api.proto.v1.CreatePreviewResponse,
  /**
   * @param {!proto.api.proto.v1.CreatePreviewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.CreatePreviewResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.CreatePreviewRequest,
 *   !proto.api.proto.v1.CreatePreviewResponse>}
 */
const methodInfo_StoryService_CreatePreview = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.CreatePreviewResponse,
  /**
   * @param {!proto.api.proto.v1.CreatePreviewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.CreatePreviewResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.CreatePreviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.CreatePreviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.CreatePreviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.createPreview =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/CreatePreview',
      request,
      metadata || {},
      methodDescriptor_StoryService_CreatePreview,
      callback);
};


/**
 * @param {!proto.api.proto.v1.CreatePreviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.CreatePreviewResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.createPreview =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/CreatePreview',
      request,
      metadata || {},
      methodDescriptor_StoryService_CreatePreview);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.SaveAndPublishRequest,
 *   !proto.api.proto.v1.SaveAndPublishResponse>}
 */
const methodDescriptor_StoryService_SaveAndPublish = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/SaveAndPublish',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.SaveAndPublishRequest,
  proto.api.proto.v1.SaveAndPublishResponse,
  /**
   * @param {!proto.api.proto.v1.SaveAndPublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.SaveAndPublishResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.SaveAndPublishRequest,
 *   !proto.api.proto.v1.SaveAndPublishResponse>}
 */
const methodInfo_StoryService_SaveAndPublish = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.SaveAndPublishResponse,
  /**
   * @param {!proto.api.proto.v1.SaveAndPublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.SaveAndPublishResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.SaveAndPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.SaveAndPublishResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.SaveAndPublishResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.saveAndPublish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/SaveAndPublish',
      request,
      metadata || {},
      methodDescriptor_StoryService_SaveAndPublish,
      callback);
};


/**
 * @param {!proto.api.proto.v1.SaveAndPublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.SaveAndPublishResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.saveAndPublish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/SaveAndPublish',
      request,
      metadata || {},
      methodDescriptor_StoryService_SaveAndPublish);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.api.proto.v1.SaveAndUnpublishRequest,
 *   !proto.api.proto.v1.SaveAndUnpublishResponse>}
 */
const methodDescriptor_StoryService_SaveAndUnpublish = new grpc.web.MethodDescriptor(
  '/api.proto.v1.StoryService/SaveAndUnpublish',
  grpc.web.MethodType.UNARY,
  proto.api.proto.v1.SaveAndUnpublishRequest,
  proto.api.proto.v1.SaveAndUnpublishResponse,
  /**
   * @param {!proto.api.proto.v1.SaveAndUnpublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.SaveAndUnpublishResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.api.proto.v1.SaveAndUnpublishRequest,
 *   !proto.api.proto.v1.SaveAndUnpublishResponse>}
 */
const methodInfo_StoryService_SaveAndUnpublish = new grpc.web.AbstractClientBase.MethodInfo(
  proto.api.proto.v1.SaveAndUnpublishResponse,
  /**
   * @param {!proto.api.proto.v1.SaveAndUnpublishRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.api.proto.v1.SaveAndUnpublishResponse.deserializeBinary
);


/**
 * @param {!proto.api.proto.v1.SaveAndUnpublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.api.proto.v1.SaveAndUnpublishResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.api.proto.v1.SaveAndUnpublishResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.api.proto.v1.StoryServiceClient.prototype.saveAndUnpublish =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/api.proto.v1.StoryService/SaveAndUnpublish',
      request,
      metadata || {},
      methodDescriptor_StoryService_SaveAndUnpublish,
      callback);
};


/**
 * @param {!proto.api.proto.v1.SaveAndUnpublishRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.api.proto.v1.SaveAndUnpublishResponse>}
 *     A native promise that resolves to the response
 */
proto.api.proto.v1.StoryServicePromiseClient.prototype.saveAndUnpublish =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/api.proto.v1.StoryService/SaveAndUnpublish',
      request,
      metadata || {},
      methodDescriptor_StoryService_SaveAndUnpublish);
};


module.exports = proto.api.proto.v1;

