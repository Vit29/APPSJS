// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.


const areaOrPerimeter = function(l , w) {
    // FORMA UNO
    // if (l === w ) {
    //     return l * w 
    // } else if (l != w) {
    //     return l*2 + w*2
    // }

    // FORMA DOS
    // if (l === w ) return l * w 
    // if (l != w) return l*2 + w*2

    // FORMA TRES

    console.log(l ** 2);
    return l === w ? l * w : (l + w ) * 2 
    // Tambien pude ser ? l ** : (l + w ) * 2


}
  console.log(areaOrPerimeter( 10 , 6 ));