// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Write a JavaScript program to sort an array of JavaScript objects.

// Intialized variables
var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245
  }
];

// Created an empty array that we will use to sort and compare it's elements
let compareArr = [];

// Created function that can sort an array objects by it's key
function sortObj(objects, key) {
  //Loop that handles the sorting by iterating through an object
  for (let i = 0; i < objects.length; i++) {
    //Push the value of the keys to a new array
    compareArr.push(objects[i][key]);
    //Sort the values in the new array
    compareArr.sort();
  }
  //Outer loop that can point to the elements in new array
  for (let j = 0; j < compareArr.length; j++) {
    //Inner loop that iterates through the original array of objects
    for (let k = 0; k < objects.length; k++) {
      //Checks if element of the compareArr is equal the value of the object
      if (compareArr[j] == objects[k][key]) {
        //If equal Assign the object to the index of the compareArr
        compareArr[j] = objects[k];
      }
    }
  }
  return compareArr;
}

console.log(library);

console.log(sortObj(library, "title"));
