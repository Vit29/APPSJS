// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


// function sumMix(x){
//     // console.log(x);
//     const res = x.map( (e , i ) => {
//         console.log(+e );
//         return +e
//     })
//     console.log(res);
//     const suma = res.reduce((a ,v) => {
//         // console.log(a + v );
//         return a + v
//     }, 0)
//     console.log(suma);
//     return suma
// }


// function sumMix(x){
    //     res = x.map( (e) => +e )
    //     return suma = res.reduce((a,v) => a + v) 
    // }
    


    function sumMix (x) {
        // return x.reduce((a,v) => {
        //     console.log(a);
        //     console.log(a + +v);
        //     return a + +v 
        // })

        return x.reduce((a,v) => a + +v)
    }

console.log(sumMix([9, 3, '7', '3']));