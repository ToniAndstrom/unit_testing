export default class Dice{
    #upperBound
    #minimum
    #dotCount

    constructor(ubound=6){
        if(!Number.isInteger(ubound)){
            throw new Error('upper bound must be an integer');
        }
        if(ubound<2){
            throw new Error('upper bound too small');
        }
        if(ubound>20){
            throw new Error('upper bound too big');
        }
        this.#upperBound=ubound;
        this.#minimum=1;
        this.#dotCount=0;
    }

    //just for demo, not in the API
    // set minimumValue(value){
    //     this.#minimum=value;
    // }

    //getters
    get minimumValue(){
        return this.#minimum;
    }

    get maximumValue(){
        return this.#upperBound;
    }

    get dots(){
        return this.#dotCount
    }

    roll(){
        this.#dotCount=Math.floor(Math.random()*this.#upperBound)+1;
    }

    toString(){
        // if(this.#dotCount===0){
        //     return 'not rolled yet';
        // }
        // return `${this.#dotCount}`;

        return this.#dotCount === 0 ? 'not rolled yet' : `${this.#dotCount}`;
    }
}