"use strict";

const Dice = require("../dice");

describe("testing the constructor", () => {
  const dice = new Dice();

  test("maximumValue is 6", () => {
    expect(dice.maximumValue).toBe(6);
  });
  test("minimumValue is 1", () => {
    expect(dice.minimumValue).toBe(1);
  });
  test("dots is zero", () => {
    expect(dice.dots).toBe(0);
  });
});

describe("Create a dice with upperbounds 2-20", () => {
  const testValues = new Array(19).fill(2).map((value, ind) => [value + ind]);

  test.each(testValues)("test upper bound %s", (upperbound) => {
    const dice = new Dice(upperbound);
    expect(dice.dots).toBe(0);
    expect(dice.minimumValue).toBe(1);
    expect(dice.maximumValue).toBe(upperbound);
  });
});

describe("Test the exceptions", () => {
  const testValues = [
    ["a", "upper bound must be an integer"],
    ["1", "upper bound must be an integer"],
    [2.5, "upper bound must be an integer"],
    [null, "upper bound must be an integer"],
    [true, "upper bound must be an integer"],
    [false, "upper bound must be an integer"],
    [1, "upper bound too small"],
    [0, "upper bound too small"],
    [-1, "upper bound too small"],
    [21, "upper bound too big"],
  ];

  test.each(testValues)('upper bound %s throws "%s"', (ub, text) => {
    expect(() => new Dice(ub)).toThrow(text);
  });
});
describe("test cases for roll", () => {
  describe("Create a dice with no upper bound given", () => {
    const dice = new Dice();

    test("when rolled", () => {
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(6);
    });
  });
  
  describe("Create a dice with upper bound 2...20", () => {
    const testValues = new Array(19).fill(2).map((value, ind) => [value + ind]);
    test.each(testValues)("test upper bound %s", (upperbound) => {
      const dice = new Dice(upperbound);
      dice.roll();
      expect(dice.dots).toBeGreaterThanOrEqual(1);
      expect(dice.dots).toBeLessThanOrEqual(upperbound);
    });
  });
});

describe("Test cases for the toString", () => {
  let dice;

  beforeEach(() => {
    dice = new Dice();
  });

  test("Dice rolled", () => {
    dice.roll();
    expect(dice.toString()).toBe(`${dice.dots}`);
  });

  test("Dice not rolled", () => {
    expect(dice.toString()).toBe("not rolled yet");
  });
});

describe('test cases for roll version2', () => {
  describe('create dice with no upper bound given', () => {
    const dice = new Dice();

    for (let i=0; i<10;i++){
      test('when rolled',()=>{
        dice.roll();
        expect(dice.dots).toBeGreaterThanOrEqual(1);
        expect(dice.dots).toBeLessThanOrEqual(6)
      });
    }
    const dotCounts=[];
    test('dot distribution ok', ()=>{
      for(let i=0;i<60;i++){
        dice.roll();
        dotCounts.push(dice.dots);
      }
      expect(new Set(dotCounts).size).toBe(6);
    })
   });
 })