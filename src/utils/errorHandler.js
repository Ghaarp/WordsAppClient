export function errorHandle(res, setErrorMessage, setShowError) {
  const { isError, errorMessage, status } = res;
  console.log(isError);
  if (isError) {
    console.log(`${status ? status : ""} (${errorMessage})`);
    setErrorMessage(`${status ? status : ""} (${errorMessage})`);
    setShowError(true);
    return true;
  }
  return false;
}
