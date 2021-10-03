/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ServiceClient =
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
proto.ServicePromiseClient =
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
 *   !proto.Code,
 *   !proto.SubmissionResult>}
 */
const methodDescriptor_Service_Run = new grpc.web.MethodDescriptor(
  '/Service/Run',
  grpc.web.MethodType.UNARY,
  proto.Code,
  proto.SubmissionResult,
  /**
   * @param {!proto.Code} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubmissionResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Code,
 *   !proto.SubmissionResult>}
 */
const methodInfo_Service_Run = new grpc.web.AbstractClientBase.MethodInfo(
  proto.SubmissionResult,
  /**
   * @param {!proto.Code} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.SubmissionResult.deserializeBinary
);


/**
 * @param {!proto.Code} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.SubmissionResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.SubmissionResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ServiceClient.prototype.run =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Service/Run',
      request,
      metadata || {},
      methodDescriptor_Service_Run,
      callback);
};


/**
 * @param {!proto.Code} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.SubmissionResult>}
 *     Promise that resolves to the response
 */
proto.ServicePromiseClient.prototype.run =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Service/Run',
      request,
      metadata || {},
      methodDescriptor_Service_Run);
};


module.exports = proto;

