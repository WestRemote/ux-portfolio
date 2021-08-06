// console.log('Hello world, here we go.');

// alert('Hello');

// var text1 = 'Hello...';
// var text2 = 'Hello, spaces are also OK!';
// var text3 = 'Single quotes are valid too.';
// console.log(text1, text2);
// console.log(text3);

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

// delete personParent.name;

// personParent.name = 'Anne'; // Set the name property to 'Anne'
personParent.child.size = 175; // Set new values that weren't set before
console.log(personParent.child.name); // Output 'Sara' to the console

console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age

console.log('Hello again')


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
