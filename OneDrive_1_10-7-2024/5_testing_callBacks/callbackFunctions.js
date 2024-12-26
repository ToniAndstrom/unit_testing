'use strict';

//parameter cb is a function
function printNiceText(text, cb){
    cb(text);
}

// printNiceText('some text', console.log);

// printNiceText('more text', text=>{
//     console.log('###########');
//     console.log(text);
//     console.log('########');
// });

function print(text){
    console.log('*********');
    console.log(text);
    console.log('*********');
}

// printNiceText('some additional text', print);

function printWhenReady(text,cb){
    setTimeout(()=>cb(text), Math.random()*3000);
}

printWhenReady('xyz', console.log);
printWhenReady('abc',print);

console.log('this is the end');

function printText(cb, text){
    cb(text);
}

printText(console.log, 'qwertyuiop');
