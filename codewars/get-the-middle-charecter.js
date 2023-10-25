// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s) {
    // s = s.toString()
    // console.log(s.toString().length);
    // console.log(s.length % 2 === 1);

    // if (s.length % 2 === 1) {
    //     // console.log(s[Math.floor(s.length / 2)]);
    //     return s[Math.floor(s.length / 2)]
    // } else {
        //     // console.log(s.length / 2 - 1);
    //     // console.log(s.length / 2);
    //     return s[s.length / 2 - 1] + s[s.length / 2]  
    // }
    
    return s.length % 2 === 1 ? s[Math.floor(s.length / 2)] : s[s.length / 2 - 1] + s[s.length / 2]
    
}
console.log(getMiddle('vanessa'));

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

