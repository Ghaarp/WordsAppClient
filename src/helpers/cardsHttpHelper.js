import { fetchTranslation } from "../http/card";
import { errorHandle } from "../utils/errorHandler";

export class CardsHttpHelper {
  static async fetchData(fetchFunction, args, setIsLoading, contextObject) {
    contextObject.setIsLoading(true);
    try {
      const res = await fetchFunction(args);
      if (
        errorHandle(
          res,
          () => {},
          () => {}
        )
      ) {
        contextObject.setIsLoading(false);
        return;
      }
      return res;
    } catch (e) {
    } finally {
      contextObject.setIsLoading(false);
    }
  }
}
