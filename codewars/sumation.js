var summation = function (num) {
    let sum = 0
    for (let index = 1; index <= num; index++) {
        console.log(index);
        sum += index 
        console.log(sum);
    }
    return sum
    
    
}

console.log(summation(10));