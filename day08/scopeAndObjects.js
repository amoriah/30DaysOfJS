//scope.js
// a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
// b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
// console.log(a, b) // accessible
//----------------------------------------------------------------------------------------------------------------------------
//scope.js
// let a = 'JavaScript' // is a global scope it will be found anywhere in this file
// let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible
//---------------------------------------------------------------------------------------------------------------------------------
//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible
//-----------------------------------------------------------------------------------------------------------------------
// //scope.js
// function letsLearnScope() {
// 	var gravity = 9.81
// 	console.log(gravity)
  
//   }
//   console.log(gravity)// Uncaught ReferenceError: gravity is not defined
  
//   if (true){
// 	var gravity = 9.81
// 	console.log(gravity) // 9.81
//   }
//   console.log(gravity)  // 9.81
  
//   for(var i = 0; i < 3; i++){
// 	console.log(i) // 0, 1, 2
//   }
//   console.log(i) // 3
  //-----------------------------------------------------------------------------------------------------------------------
//   console.log(console)
//   console.log(window)
//***********************************Object Methods************************************
// -Object.assign: To copy an object without modifying the original object
// -Object.keys: To get the keys or properties of an object as an array
// -Object.values:To get values of an object as an array
// -Getting object keys and values using Object.entries()
// -hasOwnProperty: To check if a specific key or property exist in an object