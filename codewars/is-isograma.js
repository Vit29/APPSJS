function isIsogram(str){
    
    // console.log(new Set(str.toUpperCase()).size);
    return new Set(str.toUpperCase()).size == str.length;

    // str = str.toLowerCase()
    // const letterMap = {}
    // for (let i = 0; i < str.length; i++) {
    //     // const letter = str[i];
    //     if (letterMap[str[i]]) {
    //         return false
    //     }
    //     letterMap[str[i]] = true
    // }
    // console.log(letterMap);
    // return true
}

console.log(isIsogram("helo"));

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false
// Dermatoglyphics



