//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

//Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move (position, roll) {
    return position + roll * 2 
    // console.log(position + roll * 2);
}
console.log(move(13 , roll ));
//actualizar la position de el player.

function rollDice () {
    result = Math.floor(Math.random(6) * 7 )
    if (result == 0) {
        let = roll = result + 1
    } else {
       let =  roll = result 
       console.log(roll);
    }
}
console.log(rollDice());

