const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name); // => "Hi, I am Max"
  },
};
const hobbies = ['Sports', 'Cooking', 1, true];

// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies]; // SPREAD operator (...)
console.log(copiedArray);
const copiedPerson = {...person};
console.log(copiedPerson);

const toArray = (...args) => {
  // REST operator
  return args;
};
console.log(toArray(1, 2, 3, 4, 5)); // => [1, 2, 3, 4, 5]

// const toArray = (arg1, arg2, arg3) => {
//   return [arg1, arg2, arg3];
// };
// console.log(toArray(1, 2, 3)); // => [1, 2, 3]
// console.log(toArray(1, 2, 3, 4)); // => [1, 2, 3]

// // Objects and arrays are so-called reference types
// hobbies.push('Programming');
// /*
// Can add new element, because constant value has not changed.
// The reason is that reference types only store an address pointing
// at the place in memory where that array is stored and that pointer address hasn't
// changed by adding a new element
// */
// console.log(hobbies);
// // Copy the ARRAY actual value
// let copiedHobbies = hobbies.slice();
// console.log(copiedHobbies);
// copiedHobbies = [...hobbies];
// console.log(copiedHobbies);
// // Copy the OBJECT actual value
// let copiedPerson = Object.assign({}, person);
// console.log(copiedPerson);
// copiedHobbies = {...person};
// console.log(copiedPerson);

// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(
//   // .map(): update value and return a new array, it won't edit old array
//   hobbies.map((hobby) => 'Hobby: ' + hobby)
// );
// console.log(hobbies);

// A key-value pair is also called a "property" or a "field" of the object
// const person = {
//   name: 'Max',
//   age: 29,
//   greet() {
//     console.log('Hi, I am ' + this.name); // => "Hi, I am Max"
//   },
// };
// person.greet(); // => "Hi, I am Max"

// const person = {
//   name: 'Max',
//   age: 29,
//   greet: function () {
//     console.log('Hi, I am ' + this.name);
//   },
// };
// person.greet(); // => "Hi, I am Max"

// const person = {
//   name: 'Max',
//   age: 29,
//   greet: () => {
//     console.log('Hi, I am ' + this.name);
//   },
// };
// person.greet(); // => "Hi, I am undefined"
// console.log(person);

// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// // name = 'Dang Thach'; // will be error
// age = 30;

// // console.log(name);

// const summarizeUser = (userName, userAge, userHasHobby) => {
//   return (
//     'Name is ' +
//     userName +
//     ', age is ' +
//     userAge +
//     ' and the user has hobbies: ' +
//     userHasHobby
//   );
// };

// // console.log(summarizeUser(name, age, hasHobbies));

// // const add = (a, b) => {
// //   return a + b;
// // };
// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
// const addRandom = () => 1 + 2;

// console.log(addRandom());
// // console.log(addOne(5));
// // console.log(add(1, 2));
