function truncateString(str, num = 32) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}
export default truncateString;
