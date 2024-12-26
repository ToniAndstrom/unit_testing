'use strict';

const search = require('../carStorageCallbackV2');

describe('testing callback', ()=>{
    test('search with licence "ABC-1"', done =>{
        function cb(data){
            try{
                expect(data).toEqual([
                    { "model": "Bored T-model", "licence": "ABC-1" }
                ]);
                done();
            }
            catch(error){
                done(error)
            }
        } //cb ends here

        search('licence','ABC-1',cb);
    });
});

describe('testing with testEach', ()=>{
    const testValues=[
        //key,    value,  result
        ['licence', 'XYZ-123', [
            { "model": "Nova", "licence": "XYZ-123" }
        ]],
        ['licence', 'X-999', []],
        ['model','Bored T-model',[
            { "model": "Bored T-model", "licence": "ABC-1" },
            { "model": "Bored T-model", "licence": "GTF-10" }
        ]]
    ];

    test.each(testValues)('%s, %s', (key,value,result,done)=>{
        function testCB(data){
            try{
                expect(data).toEqual(result);
                done();
            }
            catch(error){
                done(error);
            }
        } //end of testDB

        search(key,value,testCB);
    });
});

describe('testing missing parameters', ()=>{

    const expectedResult = [
        { "model": "Bored T-model", "licence": "ABC-1" },
        { "model": "Nova", "licence": "XYZ-123" },
        { "model": "Bored T-model", "licence": "GTF-10" },
        { "model": "XCT", "licence": "B-1" }
    ];

    test('search with no key and value', done=>{

        function cb(data){
            try{
                expect(data).toEqual(expectedResult);
                done();
            }
            catch(error){
                done(error);
            }
        }

        search(cb);
    });
});

test('all parameters missing',()=>{
    expect(() => search()).toThrow('Callback function missing!');
});