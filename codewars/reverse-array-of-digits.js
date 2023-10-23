// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    // return [...n.toString()].map(e => {
    //     return Number(e)
    // }).reverse()
    return [...n.toString()].map(Number).reverse()
}
console.log(digitize(35231));