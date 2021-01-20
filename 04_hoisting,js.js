// ---------Function Declaration-----------
// function sum(a, b) {
//   return a + b;
// }
//
// console.log(sum(1, 2)); //3

// console.log(sum(1, 2)); //3
//
// function sum(a, b) {
//   return a + b;
// }

// ---------Function Expression-----------
console.log(sum(1, 2)); //ReferenceError

const sum = (a, b) => {
  return a + b;
};

console.log(sum(1, 2)); //3

// var i; // при инициализации базовое значение undefined
// console.log(i); // undefined
// i = 42;
// console.log(i); // 42

// console.log(num); // ReferenceError
// const num = 42;
// console.log(i); // 42


