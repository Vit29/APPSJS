// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    // console.log(array);
    // return array.map((e) => {
    //     console.log(e >= 0 );
    //     if (e > 0) {
    //         console.log(-e);
    //         return -e
    //     } else {
    //         console.log(Math.abs(e));
    //         return Math.abs(e)
    //     }
    // })

    return array.map((e)=> e > 0 ? -e : Math.abs(e))
    // return array.map((e)=> -e)
 }

console.log(invert([0,-1,2,-3,4,-5]));