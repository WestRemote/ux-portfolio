// =======Nesting Objects========
var age = 39;
var name = 'John';
var personParent = {
  name: name,
  age: age,
  child: {
    name: 'Sara',
    size: 356
  }
}

// console.log(personParent["firstname"]); // The same as personParent.name
// var weWantThisField = "age";
// console.log(personParent[weWantThisField]); // The same as personParent.age

// =========Bracket Notation===========
var shortObject = {name2: "William", age: 31};
var secondName = "name2";
// console.log(secondName);
// console.log(shortObject.name2);
// delete shortObject.name2;
// console.log(shortObject[secondName]);



// ==========Arrays===========
var shortArray = [1, 2, 3, 'hello'];
var mixedArray = [
  100,
  "Hello",
  {},
  ["Nested array", "Second item in nest"]
];

shortArray[0] = 1000; // Overwrites the prior value, 1, with 100

// console.log(shortArray[0]); // Outputs "1", the first value
// console.log(mixedArray[3] [1]); // Outputs "nested array"

var myArray = [1,2];
myArray.push(3);
myArray.push("Test", "Five");
console.log(myArray); // Will output: [1,2,3, "Test"]



// ==========Functions==========
function add(number1, number2) {
  return number1 + number2;
}
var result = add(7, "yes");
console.log(result);


var subtract = function (num3, num4) {
  return num3 - num4;
}
var myObject = {};
myObject.subtract = function(number1, number2) {
  // ...
};

console.log(subtract);


// =======Variables==========
var a = [1, 2, 5];
var b = a; // Both a & b contain the same array instance
a.push(3, 6); // Both a & b will be [1,2,3]
// so when we add to a (or b), the other will always stay exactly the same
console.log(a);
console.log(b);

var a2 = 1;
var b2 = a2; // Both a & b now have the value 1
a2 = 2; // Now, a = 2 and b remains 1
console.log(a2, b2);

var a3 = { age: 1 };
var b3 = a3;
b3.name = "John"; // a.name will now also be "John"
console.log(a3);
console.log(b3);
console.log(age);



// =======Conditionals========
age = 20;
if (age === 20) {
  console.log("You are 20 years old!");
} else {
  // console.log("You are not 20 years old...");
}


// =======Comparisons===========
var a4 = [1, 2];
var b4 = a4; // b is now sharing the same array instance as a.
// Remember, adding a value to a would also add it to b
var c4 = [1, 2]; // c has the same content as a & b, but is a different instance.
// Changing it has no effect on a & b.

// a4 === b4; // true
// a4 === c4; // false
// b4 == c4; //false - the non-strict comparator also returns false here

if (a4 === c4) {
  console.log(true);
} else {
  console.log(false);
}

console.log("Fields 1 through 4");
var field1 = true || false; // will be true
var field2 = false || true; // will also be true
var field3 = false || "hello"; // will be "hello"
var field4 = 100 || "hello"; // will be 100
console.log(field1, field2, field3, field4);

var userInput = "Hello"; // This might come from somewhere else
function someFunction(userInput) {
  // If userInput was empty, use "Default text", else use the userInput...
  var myValue = userInput || "Default text";
  // Do something more
}
console.log(userInput);


// ==========Loops==========


var dates = [17, 19, 23, 29];
for (var i = 0; i < dates.length; i++) {
  console.log(dates[i]);
}
console.log(dates.length);

var prices = [15, 20, 25, 30];
for (var i = 0; i < prices.length; i++) {
  console.log(prices[i]);
}
