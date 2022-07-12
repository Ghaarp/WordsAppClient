import { CustomResponse } from "../response/CustomResponse";

export class RequestHelper {
  static async makeRequest(request) {
    if (!request) return;

    try {
      const data = await request();
      return new CustomResponse(false, data);
    } catch (e) {
      return new CustomResponse(true, e);
    }
  }
}
