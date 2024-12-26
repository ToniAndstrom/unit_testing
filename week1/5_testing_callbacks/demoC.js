"use strict";

const search = require("./carStorageCallbackV2");

search(console.log);
console.log("##### ONE #####");
search("model", "Nova", console.log);
console.log("##### TWO #####");
search("licence", "ABC-1", console.log);
console.log("##### THREE #####");
search("model", "Bored T-model", console.log);
console.log("##### FOUR #####");

try {
  search();
} catch (error) {
  console.log(error.message);
}
search("model", "Bored T-model", (data) => {
  data.forEach((car) => console.log(car.licence));
});
