export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  return value.length != "";
}

export function hasMinLength(value, length) {
  return value.length >= length;
}
