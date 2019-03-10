module.exports = class Dollar {
    constructor(value){
        this.amount = value;
    }

    times(number = 1){
        this.amount = this.amount * number;
    }
}