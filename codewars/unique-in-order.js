// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    // let array = []
    // for(let i = 0; i <= iterable.length - 1; i++) {
    // if(iterable[i] !== iterable[i - 1]) {
    //     console.log(iterable[i]);
    //     array.push(iterable[i])
    // }else {
    //     console.log(iterable[i]);
    // }
}
    // return array
// }

//   console.log(uniqueInOrder('AAAABBBCCDAABBB'));


var uniqueInOrder=function(iterable){
    array = [...iterable].filter((v,i) =>  {
        return v !== iterable[i - 1]
    })
    return array
}
console.log(uniqueInOrder('AAABBBCCCDDDaaabbbcccddd'));