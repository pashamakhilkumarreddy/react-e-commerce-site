const checkObjProps = (obj = {}) => {
  const values = Object.values(obj);
  if (!values.length) {
    return;
  }
  return values.every(value => value);
} 

export {
  checkObjProps,
}