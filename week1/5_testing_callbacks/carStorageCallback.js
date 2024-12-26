"use strict";

//fs = filesystem
const fs = require("fs");
const storageFile = "./cars.json";

module.exports = (cb, key, value) => {
  fs.readFile(storageFile, "utf8", (err, data) => {
    if (err) {
      cb(err);
    } else {
      const cars = JSON.parse(data);

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
      cb(found);
    }
  });
};
