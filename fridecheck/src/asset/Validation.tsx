export function isQuantityCheck(value: string) {
  const check = /^[0-9]*$/;
  return check.test(value);
}

export function isPasswordCheck(password: string, passwordCheck: string) {
  return password === passwordCheck;
}

export function isPasswordCorrect(password: string) {
  const check = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return check.test(password);
}
