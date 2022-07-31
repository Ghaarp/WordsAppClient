import { CustomResponse } from "../response/CustomResponse";
import { errorHandle } from "../../utils/errorHandler";

export class RequestHelper {
  static async makeRequest(
    callback,
    args,
    setIsLoading,
    contextObject,
    errorContextObject
  ) {
    if (!callback) return;
    contextObject.setIsLoading(true);
    const res = await RequestHelper._callMethod(callback, args);
    errorHandle(res, errorContextObject);
    contextObject.setIsLoading(false);
    return res;
  }

  //Private, do not use
  static async _callMethod(method, args) {
    try {
      const data = await method(args);
      return new CustomResponse(false, data);
    } catch (e) {
      return new CustomResponse(true, e);
    }
  }
}
