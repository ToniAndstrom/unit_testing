"use strict";

const { dec } = require("../calclibrary");

describe("testing dec with integers", () => {
  test("dec4,2) returns 2", () => {
    expect(dec(4, 2)).toBe(2);
  });

  test("dec(2,3) reuturns -1", () => {
    expect(dec(2, 3)).toBe(-1);
  });

  const testValues = [
    //a,  b,  results
    [6, -4, 10],
    [-2, 4, -6],
    [2, 4, -2],
    [0, 0, 0],
    [0, 3, -3],
    [3, 0, 3],
    [0, -3, 3],
    [-3, 0, -3],
    [200, 123, 77],
    [-500, -500, 0],
    [500, 500, 0],
    [500, -500, 1000],
    [-500, 500, -1000],
  ];
  test.each(testValues)("dec(%s, %s) = %s", (a, b, result) => {
    expect(dec(a, b)).toBe(result);
  });
});

describe("Testing with floats", () => {
  const testValues = [
    //a,  b,  results
    [10, 11.5, -1.5],
    [2.5, 3, -0.5],
    [3, 2.5, 0.5],
    [3, -2.5, 5.5],
    [-2.5, -3, 0.5],
    [-2.5, 2.5, -5],
    [2.4, -2.5, 4.9],
    [499.9, 500.0, -0.1],
    [-499.9, 500.0, -999.9],
    [-499.9, -500.0, 0.1],
    [499.9, 500, -0.1],
  ];
  test.each(testValues)("dec(%s, %s)=%s", (a, b, result) => {
    expect(dec(a, b)).toBeCloseTo(result);
  });
});

describe("Testing missing parameter", () => {
  test("dec() throws exception", () => {
    expect(() => dec()).toThrow("parameter missing");
  });
  test("dec(1) throws exception", () => {
    expect(() => dec(1)).toThrow("parameter missing");
  });
});

describe("Testing parameters are not numbers", () => {
  const testValues = [
    //label, a, b
    ["dec('1','2')", "1", "2"],
    ["dec('1',2)", "1", 2],
    ["dec(1,'2')", 1, "2"],
    ["dec('a','b')", "a", "b"],
    ["dec('','')", "", ""],
    ["dec(true,true)", true, true],
    ["dec(false,false)", false, false],
    ["dec(true,false)", true, false],
    ["dec(false,true)", false, true],
  ];

  test.each(testValues)('%s throws "only numbers allowed"', (label, a, b) => {
    expect(() => dec(a, b)).toThrow("only numbers allowed");
  });
});

describe("Testing parameters not between -500 and 500", () => {
  const testValues = [
    //a,   b
    [1000, 500],
    [500, 501],
    [-500.1, 200],
    [300, 500.1],
  ];

  test.each(testValues)("dec(%s,%s) throws exception", (a, b) => {
    expect(() => dec(a, b)).toThrow("numbers not between -500 and 500");
  });
});

test("tobeclose", () => {
  expect(886.0005).toBeCloseTo(886, 3);
});
