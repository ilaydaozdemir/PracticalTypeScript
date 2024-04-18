enum ServerResponseStatus {
  Success = 200,
  Error = "error",
}
interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}
function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["item1", "item2"],
  };
}
function getErrorResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Error,
    data: ["item3", "item4"],
  };
}
const response: ServerResponse = getServerResponse();
console.log(response);

const error: ServerResponse = getErrorResponse();
console.log(error);
