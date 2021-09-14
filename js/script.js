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
console.log(secondName);
console.log(shortObject.name2);
console.log(shortObject[secondName]);



// ==========Arrays===========
var shortArray = [1, 2, 3, 'hello'];
var mixedArray = [
  100,
  "Hello",
  {},
  ["nested array"]
];

shortArray[0] = 1000; // Overwrites the prior value, 1, with 100

console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3] [0]); // Outputs "nested array"


var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1,2,3, "Test"]
