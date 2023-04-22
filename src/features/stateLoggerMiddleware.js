const stateLoggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("Dispatch action: ", action);
  let result = next(action);
  console.log("Next action", storeAPI.getState());
  return result;
};
export default stateLoggerMiddleware;
