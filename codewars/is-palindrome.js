function reverse(str) {
    let low = str.toLowerCase()
    let reverse = low.split('').reverse().join('')
    console.log(reverse);
    low
    reverse
    console.log(reverse == low);
    return reverse == low
}

console.log(reverse('Abba'));


function isPalindrome(x) {
    let y = x.toLowerCase()
    return y == y.split('').reverse().join('')
  }
console.log(isPalindrome('Madam'));