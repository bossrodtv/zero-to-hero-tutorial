// Variables
var test = 123;
let test2 = 456;
const test3 = 789;

console.log("test", test);
console.log("test2", test2);
console.log("test3", test3);

test = "qweqwe";
test2 = 1234567890;

console.log("test", test);
console.log("test2", test2);

// Types
console.log(123);
console.log("123");
console.log(true);
console.log([1, 2, 3, "asd"]);
console.log({
  name: "bossROD",
  age: 27,
});

// Functions
function testFunction() {
  console.log("testFunction");
}

testFunction();

const testFunction2 = function () {
  console.log("testFunction2");
};

testFunction2();

const testFunction3 = () => {
  console.log("testFunction3");
};

testFunction3();

const data = {
  name: "bossROD",
  hello: () => {
    console.log("hello", this.name);
  },
};

data.hello();

// Arrays

const fruits = ["apple", "banana", "orange"];

console.log(fruits[2]);

// Objects

const person = {
  name: "bossROD",
  age: 27,
  address: {
    city: "Bangkok",
    country: "Thailand",
  },
  skills: ["HTML", "CSS", "JS"],
};

console.log(person.name);
console.log(person.age);
console.log(person.address.city);
console.log(person.address.country);
console.log(person.skills);
console.log(person.skills[0]);
console.log(person.skills[1]);
console.log(person.skills[2]);

// Condition

const age = 27;

if (age === 27) {
  console.log("Approved");
} else {
  console.log("Denied");
}

switch (age) {
  case 27:
    console.log("Approved");
    break;
  default:
    console.log("Denied");
    break;
}

// Loop

for (let i = 1; i <= 10; i++) {
  console.log("Run: ", i);
}

const animals = ["cat", "dog", "bird"];

for (let i in animals) {
  console.log("animals", animals[i]);
}

for (const animal of animals) {
  console.log(`animal ${animal} something`);
}

// Fetch

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
