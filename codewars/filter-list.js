// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.


function filter_list(l) {
    console.log(l);
    // l.filter(item => {
        //     return typeof item === 'number'
        // })
        let numberList = []
        for ( let i = 0; i <= l.length; i++) {
            console.log(l[i]);
            elemento = l[i]
            if (typeof elemento === 'number') {
            console.log(elemento);
            numberList.push(elemento)
        } else {
            console.log(elemento);
        }
    }
    console.log(numberList);
    return numberList
    
}

console.log(filter_list([1,2,'a','b']));
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

