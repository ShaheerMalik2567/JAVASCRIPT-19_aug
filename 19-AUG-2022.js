////////////JSON JSON METHODS///////////

let student = {
  name: "Shaheer",
  age: 19,
  designation: "front end developer",
  course: ["html", "css", "javascript"],
};

let shaheer = JSON.stringify(student);
// console.log(shaheer);

let room = {
  number: 13,
};

let meetup = {
  title: "conference",
  participant: [{ name: "shaheer" }, { name: "wasil" }],
  place: room,
};
room.occupiedBy = meetup;
console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return key == "occupiedBy" ? undefined : value;
  })
);

let room = {
  number: 23,
  toJson() {
    return this.number;
  },
};
let meetup2 = {
  title: "coference",
  room,
};

console.log(JSON.stringify(room));

console.log(JSON.stringify(meetup2));

//////////////////JSON PARSE///////////////
let userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user = JSON.parse(userData);

console.log(user); // 1

console.log(JSON.stringify(user));

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let abc = JSON.parse(str, function (key, value) {
  if (key == "date") return new Date(value);
  return value;
});

console.log(abc.date.getDate());

let fun = (a, b) => a + b;

console.log(fun(1, 5));

let fun2 = (a, b) => a + b;

console.log(fun2("shaheer", "malik"));

///////////////////////ARRAYS///////////////////

//////////////////ARRAYS METHODS///////////////////

let fruits = ["apple", "orange", "mango"];

console.log(fruits.pop(fruits[0]));
console.log(fruits);

console.log(fruits.push("pear"));

console.log(fruits);

console.log(fruits.shift());

console.log(fruits);
console.log(fruits.unshift("bnana"));
console.log(fruits);

let arr = [{ name: "shaheer", age: 19 }];

for (let value of arr) {
  console.log(arr[value]);
}
for (let key of arr) {
  console.log(arr[key]);
}

arr.forEach((element) => {
  console.log(element);
});

////////////////////////WEBSITE TASK//////////////////

let style = ["jazz", "blues"];
style.push("rock-n-roll");
console.log(style);

style[Math.floor((style.length - 1) / 2)] = "classics";
console.log(style);

style.shift();

console.log(style);

style.unshift("rap", "ragae");

console.log(style);

/////////////////SPLICE , SLICE//////////////////

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr2.splice(1, 2);

console.log(arr2);

console.log(arr2.splice(4, 1));

let v = console.log(arr2.slice(4, 3));
console.log(v);

console.log(arr2);

////////////// LOOPS  ////////////////////////

let arr3 = ["shaheer", "abdullah", "wasil", "ali"];

arr3.forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});

let info = [
  { name: "shaheer", age: 19, designation: "front end developer" },

  { name: "naeem", age: 20, designation: "front end developer" },

  { name: "sherjil", age: 21, designation: "full stack developer" },

  { name: "wasil", age: 21, designation: "back end developer" },
];

info.forEach((element) => {
  console.log(element.name);
});

info.forEach((element) => {
  console.log(
    `${element.name} is ${element.age} years old and is  ${element.designation}`
  );
});

/////////////////SORTING AND FINDING AN ELEMENT IN ARRAY/////////////

console.log(info.findIndex((info) => info.name == "sherjil"));

let arr4 = ["shaheer", "wasil"].map((item) => item.length);
console.log(arr);

let num = [1, 61, 2, 4, 6, 4, 7, 3, 2];
num.sort((a, b) => a - b);

console.log(num);

let names = "shaheer , wasil, ali";

let array = names.split(",");
for (let name of array) {
  console.log(`his name is ${name}`);
}

/////////////MAP AND SET////////////////

let map = new Map([
  ["shaheer", 19],
  ["wasil", 20],
  ["ali", 18],
]);
for (let name of map.keys()) {
  console.log(name);
}
for (let age of map.values()) {
  console.log(age);
}

map.forEach((value, key, map) => {
  console.log(`${key} age is ${value}`);
});

///////////MAP OBJECT.ENTRIES////////////

let obj = {
  name: "shaheer",
  age: 19,
  designattion: "front end",
};

let mapping = new Map(Object.entries(obj));

console.log(mapping.get("age"));
