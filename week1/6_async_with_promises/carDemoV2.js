"use strict"

const {initSearch} = require("./carStorageV2");

const search = initSearch();

search("model", "Nova").then(console.log).catch(console.log);
search().then(console.log).catch(console.log)

const getAcar = initSearch("x.json");
getAcar("model", "Nova").then(console.log).catch(console.log);