class Dice{
    constructor(min, max){
        "use strict";
        this.min = min;
        this.max = max;
    }

    rollDice(){
        "use strict";
        return Math.floor(Math.random() * (Dice.max - Dice.min + 1)) + Dice.min;
    }
}

export class Dice6 extends Dice{
    constructor(){
        "use strict";
        super(1, 6);
    }
}

export class Dice66{
    constructor(){
        "use strict";
        this.dice = new Dice6();
    }
    rollDice(){
        "use strict";
        var diceRoll1 = this.dice.rollDice();
        var diceRoll2 = this.dice.rollDice();

        return parseInt(diceRoll1.rolls + diceRoll2.rolls, 10)
    }
}