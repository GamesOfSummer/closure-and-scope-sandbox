// let rotLeft = (arraySize: number, timesToRotate: number, array: Number[]) => {
//     let pair = 0;

//     for (let i = 0; i < timesToRotate; i++) {
//         const newEndValue = array.shift();

//         if (newEndValue) {
//             array.push(newEndValue);
//         }
//     }

//     return array;
// };

// const result = rotLeft(
//     20,
//     10,
//     [
//         41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86,
//         51,
//     ]
// );
// console.log(result);
// const result2 = rotLeft(5, 4, [1, 2, 3, 4, 5]);
// console.log(result2);

// let rotLeftCorrectInput = (array: Number[], timesToRotate: number) => {
//     for (let i = 0; i < timesToRotate; i++) {
//         const newEndValue = array.shift();

//         if (newEndValue) {
//             array.push(newEndValue);
//         }
//     }

//     return array;
// };

if (true) {
    var test = true;
}

console.log(test); // this works because var is evil

let double = (n: number): number => {
    return n * 2;
};
// roughly the same as: let double = function(n) { return n * 2 }

// function declaration
function sayHi() {
    // (1) create
    console.log('Hello');
}

let func = sayHi; // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

// expression
let sayHi2 = function () {
    console.log('Hello');
};

let user = {
    name: 'John',
    age: 30,

    sayHi() {
        // "this" is the "current object"
        console.log(this.name);
        // console.log(name); errors
    },
};

user.sayHi(); // John

//***************** */
// default/implicit binding
function foo() {
    console.log(this.bar);
}

var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo };
var o3 = { bar: 'bar3' };

// foo();
o2.foo();

//***************** */
// hard binding with call binding
function foo2() {
    console.log(this.bar2);
}

var bar2 = 'bar22';
var object = { bar2: 'barObject2' };

// foo2(); //undefined because strict mode
foo2.call(object); // barObjcet2

console.log('/******** closure */');

function foo3() {
    var bar = 'bar3';

    function baz() {
        console.log(bar);
    }
    bam(baz);
}

function bam(baz) {
    baz();
}

// foo3();

// ***** loops

// prints 5 everytime
// for (var i = 1; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 100);
// }

for (let i = 1; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 100);
}

export {};
