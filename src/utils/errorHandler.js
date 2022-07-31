export function errorHandle(res, errorContextObject) {
  const { isError, errorMessage, status } = res;
  if (isError) {
    errorContextObject.addError(res);
    console.log(`${status ? status : ""} (${errorMessage})`);
    return true;
  }
  return false;
}
