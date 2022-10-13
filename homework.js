// 1.1. ES6 - Metode (exemple, explicatii).

// arrow functions
const sum = (a, b) => a + b;
console.log(sum(4, -2));

// template literals
const age = 22;
const str = `My age is ${age}`;
console.log(str);

// 1.2. Diferenta dintre var, let, const.

// var - function scope
const funcVar = () => {
  console.log(a);
  a = 4;
  console.log(a);
};
var a = 6;
funcVar();

var b = 5;
console.log(b);
var b = 'b';
console.log(b);

// let - block scope
let c = 6;
console.log(c);
c = 'alex';
console.log(c);
// let c = 'c'; // c has already been declared

// const - block scope and constant value
const cons = 'constant';
// cons = 'a';// reassigned constant
console.log(cons);

// 1.3. Spread operator.
const arr = [1, 2];
console.log(sum(...arr));

// 1.4. Obiecte. Cum se itereaza un obiect, deep copy.
const student = {
  nume: 'Paraschiv',
  varsta: 20,
  prenume: 'Alex',
};
const student2 = { ...student };
student2.varsta = 22;
console.log(student);
console.log(student2);

// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).
// mutator methods: push, pop, shift, unshift, slice, splice
let suma = 0;
let array = [1, 4, 5, 6];
if (array[0] === 1) array.push(-6);
console.log(array);

// 1.6. Promise. Callback.
const checkUserName = (name) => {
  return new Promise((resolve, reject) => {
    if (name === 'Alex') {
      resolve(true);
    } else {
      reject('user name not good');
    }
  });
}
console.log(checkUserName('Alex'));

// 1.7. Async. Await.
import fetch from 'node-fetch';
const getBitcoinPrice = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const info = await res.json();
  console.log(
    `Time of last update: ${info.time.updated} \nBPI: ${info.bpi.USD.rate} $`
  );
}
getBitcoinPrice();