// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
    let space , star ,tower = [];
    for (i = 1 ;i <= nFloors; ++i) {
        space = ' '.repeat( nFloors - i)
        star = '*'.repeat(2 * i - 1 )
        console.log(star);
        tower.push(`${space}${star}${space}`)
    }
    return tower
}

console.log(towerBuilder(10));

// For example:

// [
//     "     *     ", 
//     "    ***    ", 
//     "   *****   ", 
//     "  *******  ", 
//     " ********* ", 
//     "***********"
//   ]