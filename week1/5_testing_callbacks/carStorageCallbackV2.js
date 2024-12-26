"use strict";

//fs = filesystem
const fs = require("fs");
const storageFile = "./cars.json";

module.exports = (key, value, cb) => {
    if(typeof key === "function"){
        cb = key;
        key = null;
        value = null;
    }
    else if(typeof value === "function"){
        cb = value;
        key = null;
        value = null;
    }

    if (typeof cb !== "function"){
        throw new Error("Callback function missing")
    }
  fs.readFile(storageFile, "utf8", (err, data) => {
    if (err) {
      cb(err);
    }
     else {
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