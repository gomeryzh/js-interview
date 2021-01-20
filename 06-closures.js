// function sayHelloTo(name) {
//   const msg = `Hello ${name}`;
//
//   return function () {
//     console.log(msg);
//   }
// }
//
// const helloVova = sayHelloTo('Vova');
// helloVova();

function createFrameWorkManager() {
  const fw = ['Angular', 'React'];

  return {
    print: function () {
      console.log(fw.join(' '))
    },

    add: function (name) {
      fw.push(name);
    }
  }
}

// const manager = createFrameWorkManager();
// manager.print();
// manager.add('Vue');
// manager.print();

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  (
      function (j) {
        setTimeout(() => {
          console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
      }
  )(i);
}
