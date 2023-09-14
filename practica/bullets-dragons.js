// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// function hero(bullets, dragons){
//     bd = dragons * 2
//     // bullets - (dragons * 2) 
//     res =  bullets - bd
//     console.log(res);

//     if(  res < 0) {
//         return 'no sobrevives'
//     } else {
//         return 'sobrevives'
//     }
// }

// console.log(hero( ,));  

function player(bullets, dragons) {
    // dividimos las balas entre los dragones, a cada dragon le tiene que tocar de a dos balas, porque con dos mueren y en caso de que no les toque de dos balas los dragones ganan y el jugador pierde (no sobrevive )
    console.log(bullets/dragons);
    if (bullets / dragons < 2 ) {
        return false
    } else {
        return true
    }
}

console.log(player( 10, 6 ));


function guerrero(balas,dragones) {

    console.log( balas / 2 >= dragones );

    if (balas / 2 >= dragones) {
        console.log('vives');
    } else {
        console.log('mueres');
    }
}
console.log( guerrero( 10 ,6));



// function hero(bullets, dragons){
//     console.log(bullets - (dragons * 2));
//     console.log(3 < 0); 
//     //Inverti el valor ternario ?true :false -----> ?false :true
//     return bullets - dragons * 2 < 0 ? false : true
//     }

//     console.log(hero(11,6));