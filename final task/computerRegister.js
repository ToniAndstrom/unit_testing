"use strict";

module.exports = class ComputerRegister {
  #register;
  constructor(data) {
    if (!data) {
      throw new Error("data storage missing");
    }
    this.#register = data;
  }

  has_info(searchKey) {
    for (const computer of this.#register) {
      if (computer.number === searchKey) {
        if (computer.info && Object.keys(computer.info).length > 0) {
          return true;
        }
      }
    }
    return false;
  }

  get_a_computer_matching_number(searchKey) {
    if (arguments.length < 1) {
      throw new Error("missing parameter");
    }
    for (const computer of this.#register) {
      if (computer.number === searchKey) {
        return {
          number: computer.number,
          computerName: computer.computerName,
          processor: computer.processor,
          price: computer.price,
          diskspace: computer.diskspace,
          colors: computer.colors,
          info: computer.info,
        };
      }
    }
    return null;
  }

  get_computer_colors(searchKey) {
    for (const computer of this.#register) {
      if (computer.number === searchKey) {
        return computer.colors;
      }
    }
    return [];
  }

  get_All_computers_By_processor(searchValue) {
    if (arguments.length < 1) {
      throw new Error("missing parameter");
    }
    const computersFound = [];
    for (const computer of this.#register) {
      if (computer.processor === searchValue) {
        computersFound.push(computer);
      }
    }
    return computersFound;
  }

  get_total_price_of_computers_by_processor(searchValue) {
    if (arguments.length < 1) {
      throw new Error("missing parameter");
    }
    const priceOfComputers = [];
    for (const computer of this.#register) {
      if (computer.processor === searchValue) {
        priceOfComputers.push(computer.price);
      }
    }
    if (priceOfComputers.length === 0) {
      throw new Error("nothing found with given searchValue");
    }
    let sum = 0;
    for (const value of priceOfComputers){
      sum = sum + value
    }
    return sum;
  }
}; //end of class
