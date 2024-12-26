function sum(a, b) {
  if (arguments.length < 2) {
    throw new Error("parameter missing");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("only numbers allowed");
  }
  if (a < -500 || a > 500 || b < -500 || b > 500) {
    throw new Error("numbers not between -500 and 500");
  }
  return a + b;
}

function dec(a, b) {
  if (arguments.length < 2) {
    throw new Error("parameter missing");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("only numbers allowed");
  }
  if (a < -500 || a > 500 || b < -500 || b > 500) {
    throw new Error("numbers not between -500 and 500");
  }
  return a - b;
}
export { sum, dec };
