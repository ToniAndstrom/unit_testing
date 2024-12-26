'use strict';

const randomPromiseObject = ()=> new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('resolves with delay'),Math.random()*2000);

    setTimeout(()=>reject('rejects with timeout'), Math.random()*2000);
});

randomPromiseObject().then(console.log).catch(console.log);

randomPromiseObject()
    .then(message=>console.log('2',message))
    .catch(err=>console.log('2',err));

randomPromiseObject().then(console.log).catch(console.log);