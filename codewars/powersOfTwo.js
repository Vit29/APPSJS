// Complete the function that takes a non-negative integer n as input, 
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )

//  n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    let a = []
    for (let i = 0 ; i <= n ; i++){
        a.push(2**i)
        // a.push(Math.pow(2,i))
    }
    return a
}
console.log(powersOfTwo(4));

// console.log(2**0);
// console.log(2**1);
// console.log(2**2);
// console.log(2**3);
// console.log(2**4);


