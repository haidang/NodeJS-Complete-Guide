const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name); // => "Hi, I am Max"
  },
};
const hobbies = ['Sports', 'Cooking', 1, true];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
console.log(
  // .map(): update value and return a new array, it won't edit old array
  hobbies.map((hobby) => 'Hobby: ' + hobby)
);
console.log(hobbies);

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
