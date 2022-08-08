import { errorHandle } from "../utils/errorHandler";

export class CardsHttpHelper {
  static async makeRequest(
    callback,
    args,
    setIsLoading,
    contextObject,
    errorContextObject
  ) {
    contextObject.setIsLoading(true);
    try {
      const res = await callback(args);
      if (errorHandle(res, errorContextObject)) {
        contextObject.setIsLoading(false);
        return;
      }
      return res;
    } catch (e) {
      console.log(e);
    } finally {
      contextObject.setIsLoading(false);
    }
  }
}
