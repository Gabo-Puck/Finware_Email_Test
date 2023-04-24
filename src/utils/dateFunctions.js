export const formatDate = (date, options) => {
  let dateFormat = new Date(date);
  return dateFormat.toLocaleDateString("en-US", options);
};
