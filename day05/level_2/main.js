// console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let words = text.replace(/[.,]/gi, '').split(' ');
// console.log(words)
// console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat');
// console.log(shoppingCart)
shoppingCart.push('Sugar')
// console.log(shoppingCart)
shoppingCart.splice(-2, 1);
shoppingCart[3] = 'Green Tea';
// console.log(shoppingCart)


// let ind = countries.indexOf('Ethiopia');
// if (ind >= 0)
// 	console.log(countries[ind].toUpperCase());
// else
// 	countries.push('Ethiopia');


// let i = webTechs.indexOf('Sass');
// if (i >= 0)
// 	console.log(webTechs[i] + ' is a CSS preprocess');
// else
// {
// 	webTechs.push('Sass')
// 	console.log(webTechs);
// }

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd);
// console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
let min = ages[0], len = ages.length - 1, max = ages[len];
// console.log(min, max);

let med = ages.length/2
// console.log(ages);
// console.log(ages[med])

let sum = 0;
for (i in ages)
	sum += ages[i];
let av = sum / ages.length;
// console.log(av);

// console.log(Math.abs(min, av))
// console.log(Math.abs(max, av))

console.log(countries.length)
let first = countries.slice(0, countries.length/2);
console.log(first.length);
let sec = countries.slice(-(countries.length/2), countries.length)
console.log(first.length);