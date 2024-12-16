// const person = {
//   name: "Tomer",
//   age: "30",
//   isStudent: "no",
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person["isStudent"]);

// person.age = "25";
// person.hobby = "footyvolley";
// console.log(person.hobby);

// const movie = {
//   title: "SUPERMAN",
//   genre: "action",
// };
// movie.releaseYear = "1998";
// movie.isPopular = "Yes";
// movie.genre = "Drama";

// console.log(movie);

// const car = {
//   model: "x3",
//   make: "BMW",
//   year: "2020",
//   color: "blue",
// };
// for (key in car) {
//   console.log(key, ":", car[key]);
// }
// let firstPerson = {
//   name: "avi",
//   age: Number(30),
// };
// let secondPerson = {
//   name: "tom",
//   age: Number(25),
// };
// function CombinePeople(obj1, obj2) {
//   let group = {
//     "first person's name": obj1.name,
//     "second person's name": obj2.name,
//     "first person's age": obj1.age,
//     "second person's age": obj2.age,
//   };
//   console.log(group);
// }
// CombinePeople(firstPerson, secondPerson);

// function countProperties(obj) {
//   numberOfProp = Number(0);
//   for (key in obj) {
//     numberOfProp++;
//   }
//   return numberOfProp;
// }
// console.log("number of props movie:", countProperties(movie));
// console.log("number of props person:", countProperties(person));

// delete person.isStudent;

// console.log(person);

// function hasProperty(obj, prop) {
//   for (key in obj) {
//     if (key === prop) {
//       return "True";
//     }
//   }
//   return "false";
// }
// console.log(hasProperty(car, "model"));
// console.log(hasProperty(car, "m"));

// function updatePerson(person, key, value) {
//   person[key] = value;
// }

// updatePerson(person, "age", 50);
// updatePerson(person, "city", "Tel-Aviv");

// console.log(person);

let person = {};
let fruits = ["mango", "malon", "apple", "pinapple", "peach"];
console.log(fruits[0]);
console.log(fruits.at(-1));

fruits.push("banana");
fruits.unshift("orange");

console.log(fruits);

fruits.pop();
console.log(fruits);

for (i in fruits) {
  console.log(fruits[i]);
}
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (fruit of fruits) {
  console.log(fruit);
}
console.log(fruits.length);
function isInArray(array, element) {
  for (item of array) {
    if (item === element) {
      return "True";
    }
  }
  return "False";
}
console.log(isInArray(fruits, "mango"));

fruits.sort();
console.log(fruits);

fruits.reverse();
console.log(fruits);

let numbers = [1, 4, 5, 3, 8, 6, 7, 9, 12, 2];
function filterEvenNumber(array) {
  // let evenNumbers =[]
  for (item in array) {
    if (item % 2 === 0) {
      console.log(item);
    }
  }
}
filterEvenNumber(numbers);

let vegetables1 = ["tomato", "potato", "cucomber"];
let groceries = [];
for (item of vegetables1) {
  groceries.push(item);
}
for (item of fruits) {
  groceries.push(item);
}

console.log(groceries);
