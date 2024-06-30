// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[3]);

// Array methods

// myArr.push(6)
// console.log(myArr);
// myArr.push(7)
// console.log(myArr);
// myArr.pop()

// console.log(myArr);


myArr.unshift(9)      // add element in the starts
console.log(myArr);
myArr.shift()              // removes element from the start of an array
console.log(myArr);

console.log(myArr.includes(9));         // gives boolean output and tells about the element that it is present or not
console.log(myArr.indexOf(3));           // tells about the index of an element

// const newArr = myArr.join()         // change the datatype and converts the array in string


// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)            // doesn't manipulates the original array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)               // manipulates the original array
console.log("C ", myArr);
console.log(myn2);