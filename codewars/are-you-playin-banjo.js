//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
    // return name[0].toLowerCase() === 'r' ? name + ' plays banjo' : name + ' does not play banjo'
    return  `${name}` + (/^r/i.test(name)? ' plays' : 'does not pays') + ' banjo' 
    //name.match(/^r/i)
    //name.toLowerCase().startsWith('r')
    
}

console.log(areYouPlayingBanjo('ramona')); 
//     letter = name.toLowerCase()
//     console.log(letter);
//      if (letter[0] === 'r') {
//          return  name + ' plays banjo'
//         } else {
//         return  name + ' dot not play banjo'
//     }
// }












