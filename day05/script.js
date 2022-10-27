// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
// const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
// const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)

// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// console.log('Vegetables:', vegetables)
// console.log('Number of vegetables:', vegetables.length)

// console.log('Animal products:', animalProducts)
// console.log('Number of animal products:', animalProducts.length)

// console.log('Web technologies:', webTechs)
// console.log('Number of web technologies:', webTechs.length)

// console.log('Countries:', countries)
// console.log('Number of countries:', countries.length)

// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr)

//---------------Methods to manipulate array--------------------------------------------

// ****************** Array(), To create an array *****************************
/*
var arr = [];
var obj = { name: "John" };
var isBool = true;

arr.push(obj);
arr[1] = isBool;

console.log(arr[0]); // print obj.name
console.log(arr[1]); // print true

obj.age = 40;        // add age to obj
isBool = false;      // change value for isBool

console.log(arr[0]); // value here will contain age
console.log(arr[1]); // value here will still be true, changing a primitive that was
// assigned to an array will not change the value in the array as they're stored by value.
// Objects on the other hand are stored by reference, so changing the objects value will 
// reflect that change in that array. 

*/
//Also, note that when you initialize an array in the following two ways, it has a different behavior:

// var arr = new Array(100);
// console.log(arr.length);        // prints 100
// console.log(arr);               // prints []

// var arr2 = new Array(100, 200);
// console.log(arr2.length);       // prints 2
// console.log(arr2);              // prints [100, 200]



// ********************* Array.length,  To know the size of the array ****************
// ************************ ArrayFirst.concat(ArraySecond) ***************************
// - Array.indexOf(), To check if an item exist in an array. If it exists it returns the index else it returns -1.
// - slice, To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.
// - splice(start, n, elements), It takes three parameters:Starting position, number of times to be removed and number of items to be added.
// - join, 
// - toString, Converts array to string
// - includes, 
// - lastIndexOf, 
// - isArray, 
// ******** Array(n).fill(value), Fill all the array elements with a static value *****
// - push, 
// - pop, 
// - shift, 
// - unshift


