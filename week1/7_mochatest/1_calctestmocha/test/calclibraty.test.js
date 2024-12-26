"use strict";

import { expect } from "chai";
import { sum } from "../calclibrary.js";

describe("Test sum(1,1)=2", function () {
  it("sum(1,1)=2", function () {
    expect(sum(1, 1)).to.equal(2);
  });
});

describe("test sum with integers", function () {
  const testValues = [
    { a: -2, b: -4, result: -6 },
    { a: -2, b: 4, result: 2 },
    { a: 2, b: -4, result: -2 },
    { a: 0, b: 0, result: 0 },
  ];
  testValues.forEach(function (testcase) {
    it(`sum(${testcase.a}, ${testcase.b}))=${testcase.result}`, function () {
      expect(sum(testcase.a, testcase.b)).to.equal(testcase.result);
    });
  });
});

describe('test sum with integers "jest" version', function () {
  const testValues = [
    [-2, -4, -6],
    [-2, 4, 2],
    [2, -4, -2],
    [0, 0, 0],
  ];
  testValues.forEach(function (row) {
    it(`sum(${row[0]},${row[1]} = ${row[2]}`, function () {
      expect(sum(row[0], row[1])).to.equal(row[2]);
    });
  });
});

describe("test integers for-of version", function () {
  const testValues = [
    { a: -2, b: -4, result: -6 },
    { a: -2, b: 4, result: 2 },
    { a: 2, b: -4, result: -2 },
    { a: 0, b: 0, result: 0 },
  ];
  for (let v of testValues) {
    it(`sum(${v.a},${v.b}))=${v.result}`, function () {
      expect(sum(v.a, v.b)).to.equal(v.result);
    });
  }
});

describe("test sum with floats", function () {
  const testValues = [
    { a: -2.5, b: -2.5, result: -5.0 },
    { a: -2.5, b: 2.5, result: 0 },
    { a: 2.4, b: -2.5, result: -0.1 },
  ];

  testValues.forEach(function (v) {
    // v is the testvalue
    it(`sum(${v.a},${v.a})= ${v.result}`, function () {
      expect(sum(v.a, v.b)).to.be.closeTo(v.result, 0.01);
    });
  });
});

describe("testing exeptions", function () {
  it('sum(1) throws an exception "missing parameter"', function () {
    expect(function () {
      sum(1);
    }).to.throw("parameter missing");
  });
});
