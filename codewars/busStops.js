var number = function(busStops){
    busStops
    let total = 0 ;
    for (const [suben, bajan] of busStops) {
        console.log(total += suben);
        console.log(total -= bajan);
        console.log(total);
    }   
    // return Math.max(total)
    return total
 
}

console.log( number([[10,0],[3,5],[5,8]]));



