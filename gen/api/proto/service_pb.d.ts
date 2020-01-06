import * as jspb from "google-protobuf"

export class ProtoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ProtoRequest): ProtoRequest.AsObject;
  static serializeBinaryToWriter(message: ProtoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtoRequest;
  static deserializeBinaryFromReader(message: ProtoRequest, reader: jspb.BinaryReader): ProtoRequest;
}

export namespace ProtoRequest {
  export type AsObject = {
  }
}

export class ProtoResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProtoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProtoResponse): ProtoResponse.AsObject;
  static serializeBinaryToWriter(message: ProtoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProtoResponse;
  static deserializeBinaryFromReader(message: ProtoResponse, reader: jspb.BinaryReader): ProtoResponse;
}

export namespace ProtoResponse {
  export type AsObject = {
    message: string,
  }
}

