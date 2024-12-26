"use strict";

const ComputerRegister = require("../computerRegister");
const defaultData = require("../computers.json");

describe("Testing constructor", () => {
  test("Test 1: missing parameter throw an exception", () => {
    expect(() => new ComputerRegister()).toThrow("data storage missing");
  });
});

describe("Testing has_info", () => {
  test("Test1: Has_Info", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.has_info(2)).toBe(true);
  });

  test("Test2: No_Info", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.has_info(5)).toBe(false);
  });

  test("Test3:Missing parameter", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.has_info()).toBe(false);
  });

  test("Test4: Non-existing ID", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.has_info(200)).toBe(false);
  });

  test("Test5: Empty object", () => {
    const testData = [
      {
        number: 1,
        computerName: "Xunil 4.7",
        processor: "X-Force",
        price: 25,
        diskspace: "1 TB",
        colors: ["blue", "orange", "yellow"],
        info: {
          notes: "high quality",
          model: "chrome",
          consumption: "D",
        },
      },
      {
        number: 2,
        computerName: "GameDelux",
        processor: "X-Force",
        price: 10,
        diskspace: "10 GB",
        colors: ["red", "white", "green"],
        info: {},
      },
    ];
    const register = new ComputerRegister(testData);
    expect(register.has_info(2)).toBe(false);
  });
});

describe("Testing get_a_computer_matching_number", () => {
  test("Test1:Finds a matching number", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.get_a_computer_matching_number(2)).toEqual({
      number: 2,
      computerName: "GameDelux",
      processor: "X-Force",
      price: 10,
      diskspace: "10 GB",
      colors: ["red", "white", "green"],
      info: {
        notes: "high quality",
        model: "XXL",
        consumption: "A+",
      },
    });
  });

  test("Test2:Doesn't find a matching number", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.get_a_computer_matching_number(7)).toEqual(null);
  });

  test("Test 3: Missing parameter", () => {
    const register = new ComputerRegister(defaultData);
    expect(() => register.get_a_computer_matching_number()).toThrow(
      "missing parameter"
    );
  });
});

describe("Testing get_computer_colors", () => {
  test("Test1: Finds colors array", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.get_computer_colors(2)).toEqual(["red", "white", "green"]);
  });

  test("Test2: No computer with id found", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.get_computer_colors(200)).toEqual([]);
  });

  test("Test3: Empty array", () => {
    const testData = [
      {
        number: 1,
        computerName: "Xunil 4.7",
        processor: "X-Force",
        price: 25,
        diskspace: "1 TB",
        colors: ["blue", "orange", "yellow"],
        info: {
          notes: "high quality",
          model: "chrome",
          consumption: "D",
        },
      },
      {
        number: 2,
        computerName: "GameDelux",
        processor: "X-Force",
        price: 10,
        diskspace: "10 GB",
        colors: [],
        info: {
          notes: "high quality",
          model: "XXL",
          consumption: "A+",
        },
      },
    ];
    const register = new ComputerRegister(testData);
    expect(register.get_computer_colors(2)).toEqual([]);
  });

  test("Test4:Missing parameter", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.get_computer_colors()).toEqual([]);
  });
});

describe("Testing get_All_computers_By_processor(searchValue)", () => {
  test("Test1: Find a computer by processor", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.get_All_computers_By_processor("Selenium II")).toEqual([
      {
        number: 3,
        processor: "Selenium II",
        price: 200,
        diskspace: "1 TB",
        colors: ["green", "blue", "orange"],
        info: {
          notes: "high quality",
          model: "VIP",
          consumption: "C",
        },
      },
    ]);
  });

  test("Test2: Find all computers with the same processor", () => {
    const register = new ComputerRegister(defaultData);
    expect(register.get_All_computers_By_processor("X-Force")).toEqual([
      {
        number: 1,
        computerName: "Xunil 4.7",
        processor: "X-Force",
        price: 25,
        diskspace: "1 TB",
        colors: ["blue", "orange", "yellow"],
        info: {
          notes: "high quality",
          model: "chrome",
          consumption: "D",
        },
      },
      {
        number: 2,
        computerName: "GameDelux",
        processor: "X-Force",
        price: 10,
        diskspace: "10 GB",
        colors: ["red", "white", "green"],
        info: {
          notes: "high quality",
          model: "XXL",
          consumption: "A+",
        },
      },
    ]);
  });

  test("Test3: No computer of given processor found", () => {
    const register = new ComputerRegister(defaultData);
    expect(
      register.get_All_computers_By_processor("Not real processor")
    ).toEqual([]);
  });

  test("Test4: Missing parameter", () => {
    const register = new ComputerRegister(defaultData);
    expect(() => register.get_All_computers_By_processor()).toThrow(
      "missing parameter"
    );
  });
});

describe("Testing total price of computers with same processor", () => {
  test("Test1: ", () => {
    const register = new ComputerRegister(defaultData);
    expect(
      register.get_total_price_of_computers_by_processor("X-Force")
    ).toEqual(35);
  });

  test("Test2: No computer with given searchvalue found", () => {
    const register = new ComputerRegister(defaultData);
    expect(() =>
      register.get_total_price_of_computers_by_processor("best processor")
    ).toThrow("nothing found with given searchValue");
  });

  test("Test3: Missing parameter", () => {
    const register = new ComputerRegister(defaultData);
    expect(() => register.get_total_price_of_computers_by_processor()).toThrow(
      "missing parameter"
    );
  });
});
