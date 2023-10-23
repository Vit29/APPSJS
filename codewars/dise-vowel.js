// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    // array =  str.split('').filter((vocales) => {
    //     if ( vocales == 'a' || vocales == 'e' || vocales == 'i' || vocales == 'o' || vocales == 'u' ) {
    //         console.log(vocales);
    //     }else {
    //         console.log(vocales);
    //         return vocales
    //     }
    // })
    // console.log(array);

    return str.replace(/[aeiou]/gi,'')
  }
  console.log(disemvowel("This website is for losers LOL!"));