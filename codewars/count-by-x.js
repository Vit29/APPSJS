// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).


function countBy(x, n) {
    // let z = [];
    // let i = 1
    // while ( i <= n ) {
    //     z.push(x * i)
    //     i++
    // }

    // let z = [];
    // for (let i = 0; i <= n; i++) {
    //     console.log(x * i);
    //     z.push(x * i)
    // }

    let z = [];
    console.log(Array(n));
    return [...Array(n)].map((e, i) => {
        console.log(i);
        return i++ * x
    })
    return z;
  }
  console.log(countBy(2,10));

