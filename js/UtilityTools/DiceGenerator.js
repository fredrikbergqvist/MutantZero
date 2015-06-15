import { Dice6, Dice66 }  from './Dice';

export function rollD6(numberOfDice = 1) {
    "use strict";
    return rollDice(new Dice6(), numberOfDice);
}
export function rollD66(){
    "use strict";

    return rollDice(new Dice66());
}

function rollDice(diceToRoll, numberOfDice=1){
    "use strict";

    var total = 0;
    var rolls = '';
    var i = 0;
    var rollResult = 0;


    for (; i < numberOfDice; i++) {
        rollResult = diceToRoll.rollDice();
        total += rollResult;
        if (rolls.length > 0) {
            rolls = rolls + ' + ';
        }
        rolls = rolls + rollResult.toString();
    }

    return {
        result: total,
        numberOfDice: numberOfDice,
        rolls: rolls
    }
}

