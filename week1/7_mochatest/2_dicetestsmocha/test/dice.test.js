import { expect } from "chai";

import Dice from "../dice.js";

describe("methods defined", function () {
  const dice = new Dice();

  it("getter maximumValue is defined", function () {
    expect(dice).to.have.a.property("maximumValue"); // you can also write without the a. example below.
  });

  it("getter dots is defined", function () {
    expect(dice).to.have.property("dots");
  });

  it("method roll is defined", function () {
    expect(dice).to.have.property("roll");
  });

  // no need to test because toString is always defined
  //   it("method toString is defined", function () {
  //     expect(dice).to.have.property("toString");
  //   });
});

describe("test roll", function () {
  let dice;

  this.beforeEach(function () {
    dice = new Dice();
  });

  it("test not rolled yet", function () {
    expect(dice.dots).to.equal(0);
  });

  it("dice rolled", function () {
    dice.roll();
    expect(dice.dots).to.be.within(1, 6);
  });
});

describe("test toString", function () {
  let dice;

  this.beforeEach(function () {
    dice = new Dice();
  });

  it("test not rolled yet", function () {
    expect(dice.toString()).to.equal("not rolled yet");
  });

  it("dice rolled", function () {
    dice.roll();
    expect(dice.toString()).to.be.equal(`${dice.dots}`);
  });
});

describe("Test upperbounds 1..20", function () {
  const testValues = new Array(19).fill(2).map((value, ind) => value + ind);

  testValues.forEach(function (ubound) {
    it(`Dice(${ubound})`, function () {
      const dice = new Dice(ubound);
      expect(dice.maximumValue).to.equal(ubound);
    });
  });

  testValues.forEach(function (ubound) {
    it(`Dice(${ubound}) dots are withing 1 and ${ubound}`, function () {
      const dice = new Dice(ubound);
      dice.roll();
      expect(dice.dots).to.be.within(1, ubound);
    });
  });
});

describe("test ubounds 2..20 version 2", function () {
  for (let ub = 2; ub <= 20; ub++) {
    it(`Dice(${ub})`, function () {
      const dice = new Dice(ub);
      expect(dice.maximumValue).to.equal(ub);
    });
  }
});

describe("Test the roll(distribution)", function () {
  const testValues = new Array(19).fill(2).map((value, ind) => value + ind);

  testValues.forEach(function (ubound) {
    it(`dot distribution ok with upperbound ${ubound}`, function () {
      const dotCounts = [];
      const dice = new Dice(ubound);
      for (let i = 0; i < ubound * 10; i++) {
        dice.roll();
        dotCounts.push(dice.dots);
      }
      expect(new Set(dotCounts).size).to.equal(ubound);
    });
  });
});
