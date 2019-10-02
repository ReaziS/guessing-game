class GuessingGame {
    constructor() {
        this.max = null;
        this.min = null;
        this.item = null;

    }

    setRange(min, max) {
       this.min = min;
       this.max = max;
    }

    guess() {
        
        return  Math.ceil((this.max + this.min)/2);
        
    }

    lower() {
        this.max = this.guess();
    }

    greater() {
        this.min =  this.guess();
    }
}


module.exports = GuessingGame;
