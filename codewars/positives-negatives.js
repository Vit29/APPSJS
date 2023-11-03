function countPositivesSumNegatives(input) {
    // let positivos = 0 
    let negativos = 0
    let count = 0

    if (input === null || input.length === 0) {
        return [];
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            // positivos += input[i]
            count ++
        } else {
            negativos += input[i]
        }
        
    }
    console.log(count); 
    return [count, negativos] 
}

  console.log(countPositivesSumNegatives([]));
