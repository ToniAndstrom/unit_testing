"use strict";

//fs = filesystem
const fs = require("fs");
const storageFile = "./cars.json";

module.exports = (key, value) => {
  fs.readFile(storageFile, "utf8", (err, data) => {
    if (err) {
      return err;
    } else {
      const cars = JSON.parse(data);
      module.exports = (key, value) => {
        let found = [];
        if (key && value) {
          for (const car of cars) {
            if (car[key] === value) {
              found.push(car);
            }
          }
        } else {
          found = cars;
        }
        return found;
      };
    }
  });
};
