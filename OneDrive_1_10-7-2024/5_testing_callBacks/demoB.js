'use strict';


const search = require('./carStorageCallback');

search(console.log);
console.log('##### ONE #####');
search(console.log,'model', 'Nova');
console.log('##### TWO #####');
search(console.log, 'licence', 'ABC-1');
console.log('##### THREE #####');
search(console.log, 'model', 'Bored T-model');
console.log('##### FOUR #####');

search(data=>console.log('found:',data),'licence','ABC-1');

search(data=>{
    if(data.length>0){
        const car = data[0];
        console.log(`model: ${car.model}, ${car.licence}`);
    }  
},'licence','ABC-1');

function printData(data){
    console.log('###########');
    for(const car of data){
        console.log(`model: ${car.model}, ${car.licence}`);
    }
    console.log('###########');
}

search(printData);

search(printData, 'model', 'Bored T-model')