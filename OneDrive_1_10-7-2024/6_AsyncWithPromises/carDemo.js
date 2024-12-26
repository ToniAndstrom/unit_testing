'use strict';

const {search} = require('./carstorageFilePromise');

// console.log(search('licence','ABC-1')); //wrong ->Pending

search('licence', 'ABC-1')
    .then(console.log)
    .catch(console.log);

search()
    .then(console.log)
    .catch(console.log);