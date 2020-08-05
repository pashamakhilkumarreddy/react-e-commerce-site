const checkObjProps = (obj = {}) => {
  const keys = Object.keys(obj);
  if (!keys.length) {
    return;
  }
  return keys.every((key) => key);
} 

export {
  checkObjProps,
}