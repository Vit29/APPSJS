// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

function setAlarm(employed, vacation){
    // return employed == true && vacation == true 
    // ? false : employed == true && vacation == false 
    // ? true : employed == false && vacation == true 
    // ? false : employed == false && vacation == false 
    // ? false : false

    // return employed > vacation
    
    console.log(!vacation);
    return employed && !vacation

}

console.log(setAlarm(true , true));
