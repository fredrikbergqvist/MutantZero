"use strict";

class Dice{
    constructor(min, max){
        this.min = min;
        this.max = max;
    }

    rollDice(){
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}

export class Dice6 extends Dice{
    constructor(){
        super(1, 6);
    }
}

export class Dice66{
    constructor(){
		this.dice1 = new Dice6();
		this.dice2 = new Dice6();
    }
    rollDice(){
        var diceRoll1 = this.dice1.rollDice();
        var diceRoll2 = this.dice2.rollDice();

        return parseInt(diceRoll1.toString() + diceRoll2.toString(), 10);
    }
}