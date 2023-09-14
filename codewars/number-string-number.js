const a = '5' 
const b = '2'
const c = '9'
const d = '7'
const e = '10'
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
aNum = +a
bNum = b - 0
cNum = Number(c)
dNum = parseInt(d)
eNum = e *1
console.log(typeof aNum);
console.log(typeof bNum);
console.log(typeof cNum);
console.log(typeof dNum);
console.log(typeof eNum);
aStr = String(aNum)   
bStr = bNum.toString()  
cStr = String(cNum)  
dStr = dNum.toString()  
eStr = String(eNum)
console.log(typeof aStr);
console.log(typeof bStr);
console.log(typeof cStr);
console.log(typeof dStr);
console.log(typeof eStr);

// Formas de convertir un string a numero 
// parseInt()
// Number()
// string - 0
// + stirng 
// strin * 1


//codewars
// function sumStr(a,b) {
//     // console.log(typeof a*1 + b*1 + '');
//     return a*1 + b*1 + ''
// }

// console.log(sumStr( '2', '10'));

  // function sumStr (a,b) {
      //     sum = Number(a) + Number(b)
      //     console.log(typeof sum);
      //     return sum.toString()
      // }
    
// console.log(sumStr( '2', '10'));

function sumStr(a,b) {
    suma = (+ a ) + (b - 0)
    // console.log(typeof suma);
    // console.log(typeof suma.toString());
    return suma.toString()
  }
console.log(sumStr('2','6'));