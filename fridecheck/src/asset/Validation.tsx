export function isQuantityCheck(value: string) {
  const check = /^[0-9]*$/;
  return check.test(value);
}
