"use strict";

test("This is the first test", () => {
  console.log("first test");
});
//use "it" in mocha
it("This is test 2", () => {
  console.log("test 2");
});

beforeAll(() => {
  console.log("beforeAll", "init before all tests");
});

afterAll(() => {
  console.log("afterAll", "cleaning after all tests");
});

describe("This is group A", () => {
  beforeEach(() => {
    console.log("beforeEach", "run before each in A");
  });
  afterEach(() => {
    console.log("afterEach", "run after each test");
  });
  test("first test in group A", () => {
    console.log("first in A");
  });
  test("second in group A", () => {
    console.log("second in A");
  });
});
describe("This is group B", () => {
  beforeAll(() => {
    console.log("beforeAll in B");
  });
  describe("This is group 1 in B", () => {
    test("test 1 in B", () => {
      console.log("1 in B");
    });
    test("test 2 in B", () => {
      console.log("2 in B");
    });
  });
});

describe("This is group 2 in B", () => {
  test("test 1 in B2", () => {
    console.log("1 in B2");
  });
});

describe("test concatenation function", () => {
  const concat = (partA, partB) => "" + partA + partB;

  test('testing concat("first", "last") returns "firstlast"', () => {
    expect(concat("first", "last")).toBe("firstlast");
  });
  test("testing concat(1,2) returns 12", () => {
    expect(concat(1, 2)).toBe("12");
  });
});

describe("this is test for exeption", () => {
  function testFunction() {
    throw Error("This is an exeption");
  }
  test("function throws an exeption", () => {
    //you have to put an arrowfunction in the beginning or it won't work
    expect(() => testFunction()).toThrow("This is an exeption");
  });
});
