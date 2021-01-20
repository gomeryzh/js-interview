// null, undefined, boolean, number, string, object, symbol

// ---------привидение типов-----------

// let language = 'js';
// if (language) console.log('The best language is', language);

// приводится к false '', 0, null, Nan, undefined, false

// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean([]));
// console.log(Boolean({}));
// console.log(Boolean(function () {}));

// ----------строки и числа---------------

console.log(1 + '2'); // string 12
console.log('' + 1 + 2); // string 12
console.log('' - 1 + 2); // number 1
console.log('3' * '8'); // number 24
console.log(4 + 10 + 'px'); // string 14px
console.log('px' + 4 + 10); // string px410
console.log('42' - 2); // number 40
console.log(null + 2); // number 2
console.log(undefined + 42); // NaN

// ----------== vs ===---------------

console.log(2 == '2'); // true
console.log(2 === '2'); // false
console.log(undefined == null); // true
console.log(undefined === null); // false

// ----------примеры---------------
console.log(false == ''); // true
console.log(false == []); // true
console.log(false == {}); // false
console.log('' == 0); // true
console.log('' == []); // true
console.log('' == {}); // false
console.log(0 == []); // true
console.log(0 == {}); // false
console.log(0 == null); // false
