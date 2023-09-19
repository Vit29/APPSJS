// function getGrade (s1, s2, s3) {
//     total = s1 + s2 + s3
//     promedio = total / 3
//     console.log(promedio);
//     if (promedio > 90 ) {
//         return 'A'
//     } else if (promedio >= 80  ){
//         return 'B'
//     } else if (promedio >= 70) {
//         return 'C'
//     } else if (promedio >= 60) {
//         return 'D'
//     } else if (0 <= promedio) {
//         return 'F'
//     } 
//   }

function getGrade (s1, s2, s3) {
    calf = s1 + s2 +s3 / 3
    console.log(calf = (s1 + s2 +s3) / 3);
    if (calf >= 90) return 'A';
    if (calf >= 80) return 'B';
    if (calf >= 70) return 'C';
    if (calf >= 60) return 'D';
    if (calf < 60 ) return 'F';
}

// una forma interasante --- exminar a fondo 

// function getGrade (s1, s2, s3) {
//     const avg = (s1+s2+s3)/3;
//     return [
//       [90, 'A'],
//       [80, 'B'],
//       [70, 'C'],
//       [60, 'D'],
//       [00, 'F']
//     ].find(grades => {
//         console.log(grades[0] );
//         avg
//       return grades[0] <= avg
//     })[1]

// }
console.log(getGrade( 100 ,50, 100));

