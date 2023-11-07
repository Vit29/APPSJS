// Sum Numbers
// const sum =  (numbers) =>  numbers.reduce((a,b) => a + b,0);

function sum (numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        console.log(element);
        total += element
    }
    return total
}


console.log(sum([1, 5.2, 4, 0, -1]));
// console.log(sum([]));


