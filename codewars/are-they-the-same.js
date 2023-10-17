// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];


function comp(array1, array2){
    // arrayNew = array1.map((val) => {
    //     console.log(val * val);
    //     return val * val
    // })

    if (array1 == null || array2 == null) return false
    foo = array1.map((val) => val * val).sort()
    array2.sort()
    return foo.every((v,i) => v === array2[i])
}
console.log(comp(a1,a2))