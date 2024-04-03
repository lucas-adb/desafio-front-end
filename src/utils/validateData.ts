export function isNumber(num : number) {
  return typeof num === "number" && !Number.isNaN(num);
}