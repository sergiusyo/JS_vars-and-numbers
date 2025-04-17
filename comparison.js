let x = 10;
let y = 20;

// оператор для равенства
console.log(x === y); // false - т.к. x и y  неравны
console.log(x === 10); // true - x=10


// оператор для неравенства
console.log(x !== y); // true ! в JavaScript означает неравенство
console.log(y !== 20); // false - т.к. y=20, а в данном примере мы находим неравенство


//сравнение чисел на большие или меньшие
console.log(x > y); // false - т.к. x больше y
console.log(x < y); // true - т.к. x меньше y

//использование операторов ">=" или "<="  Это нестрогое сравнение

x = 20;

console.log(x >= y); // true
console.log(x <= y); // true
