export class CustomResponse {
  constructor(isError, response) {
    this.isError = isError;
    this.response = response;
    this.errorMessage = "";
    this.status = "";
    if (isError) {
      this.errorMessage = response?.response?.data?.errorMessage;
      if (this.errorMessage == undefined)
        this.errorMessage = response.toString();
      this.status = response?.response?.status;
    }
  }
}
