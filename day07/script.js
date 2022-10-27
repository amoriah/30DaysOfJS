function solveQuadratic(a = 0, b = 0, c = 0){
	if (a == 0 && b == 0 && c == 0)
		return 0;
	let D = (b ** 2) - (4 * a * c);
	let x1 = (-b + (Math.sqrt(D))) / (2 * a);
	let x2 = (-b - (Math.sqrt(D))) / (2 * a);
	// console.log(x1, x2);
	return [x1, x2];
}

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
//----------------------------------------------------------------------
function printArray(arr){
	for (let i in arr)
		console.log(arr[i]);
}

const ar = [1,2,3,4,5,6, 'sfghwh'];
// printArray(ar);
//----------------------------------------------------------------------
function showDateTime(){
	let tm = new Date();

	console.log(`${tm.getDate()}/${tm.getMonth()}/${tm.getFullYear()} ${tm.getHours()}:${tm.getSeconds()}`);
}
//08/01/2020 04:08
// showDateTime()
//-------------------------------------------------------------------------
function swapValues(arr){
	let tmp = 0;

	tmp = arr[0];
	arr[0] = arr[1];
	arr[1] = tmp;
	console.log(arr)
}
let a = 3;
let b = 4;
let arr = [a, b];

// swapValues(arr) // x => 4, y=>3
// console.log(arr)
// swapValues(4, 5) // x = 5, y = 4
//----------------------------------------------------------------------------
function reverseArray(arr){
	let len = arr.length;
	let new_arr = [];
	arr.forEach((elem) => { new_arr.unshift(elem);})
	return new_arr;
}

// console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
//------------------------------------------------------------------------
let adIt = [];

function addItem(elem){
	adIt.push(elem);
	return adIt;
}

// console.log(addItem(4));
// console.log(addItem(5));
// console.log(addItem(6));
// console.log(addItem(7));
//-------------------------------------------------------------------------

let remIt = [0,1,2,3,4,5,6,7,8,9];

function removeItem(i){
	if (remIt.indexOf(i) >= 0)
		remIt.splice(i, 1);
	return remIt;
}
// console.log(removeItem(4));
// console.log(removeItem(5));
// console.log(removeItem(6));
// console.log(removeItem(7));
//---------------------------------------------------------------------------
function sumOfNumbers(numbers){
	let sum = 0;
	numbers.forEach((num) => { sum += num;})
	return sum;
}

// console.log(sumOfNumbers([1,2,3,4]));
//-----------------------------------------------------------------------------
function sumOfOdds(numbers){
	let sum = 0;
	numbers.forEach((num) => { 
		if (num % 2 != 0)
			sum += num;
	})
	return sum;
}
// console.log(sumOfOdds([1,2,3,4,5]));
//--------------------------------------------------------------------------------
function sumOfEven(numbers){
	let sum = 0;
	numbers.forEach((num) => { 
		if (num % 2 == 0)
			sum += num;
	})
	return sum;
}
// console.log(sumOfEven([1,2,3,4,5,6]));
//------------------------------------------------------------------------------
function evensAndOdds(number){
	let odds = 0, evens = 0, i = -1;
	while (++i <= number){
		if (i % 2 == 0)
			evens++;
		else
			odds++;
	}
	console.log(`The number of odds are ${odds}.`);
	console.log(`The number of evens are ${evens}.`);
}

// evensAndOdds(100);
//-----------------------------------------------------------------------------------

function sumAll(...args){
	let sum = 0;
	for(let num of args)
		sum += num;
	return sum;
}

// console.log(sumAll(1, 2, 3));
// console.log(sumAll(1, 2, 3, 4));
//--------------------------------------------------------------------------------

function randomUserIp(){
}

// console.log(randomUserIp());
//---------------------------------------------------------------------------------
function randomMacAddress(){
	const hex = '0123456789ABCDEF';
	let adress = '';
	for (let j = 0; j < 6; j++){
		for (let i = 0; i < 2; i++)
			adress += hex[Math.floor(Math.random() * hex.length)];
		if (j == 5)
			break;
		adress += '-';
	}
	return adress;	
}

// console.log(randomMacAddress());
//----------------------------------------------------------------------------------
function randomHexaNumberGenerator(){
	const hex = '0123456789ABCDEF';
	let num = '';
	for(let i = 0; i < 6; i++)
		num += hex[Math.floor(Math.random() * hex.length)];
	return '#' + num;
}

// console.log(randomHexaNumberGenerator());
//----------------------------------------------------------------------------------
function userIdGenerator(){
	return`${(~~(Math.random()*1e8)).toString(16)}`;
}

// console.log(userIdGenerator());
//----------------------------------------------------------------------------------
function userIdGeneratedByUser(){
	let countChar = prompt('enter count of character:');
	let countId = prompt('enter count of id:');
	for (let i = 0; i < countId; i++)
		console.log(`${(~~(Math.random() * (1e9 * 1e9))).toString(16).toUpperCase().substring(0, countChar)}`);
}

// userIdGeneratedByUser();
//-------------------------------------------------------------------------------
function rgbColorGenerator(){
	return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
}
// console.log(rgbColorGenerator())
//rgb(125,244,255)
//------------------------------------------------------------------------------
function arrayOfHexaColors(N){
	let colors = [];
	for (let i = 0; i < N; i++)
		colors.push('#' + (Math.floor(Math.random() * 1e9).toString(16).substring(0,6)));
	return colors;
}

// console.log(arrayOfHexaColors(3))
//----------------------------------------------------------------------------------
function arrayOfRgbColors(N){
	let colors = [];
	for (let i = 0; i < N; i++)
		colors.push(`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`);
	return colors;
}

// console.log(arrayOfRgbColors(10))
//--------------------------------------------------------------------------------
function convertHexaToRgb(hex){
	let r, g, b;
	r = parseInt(hex.substring(1,3), 16);
	g = parseInt(hex.substring(3,5), 16)
	b = parseInt(hex.substring(5,7), 16)
	return `rgb(${r},${g},${b})`;
}

// console.log(convertHexaToRgb('#a7bf40'));
//------------------------------------------------------------------------------
//нужно добавить ноль к числам < 16
function convertRgbToHexa(rgb){
	let tmp = rgb.split(',');
	let rgb_n = [];
	for (let el in tmp)
		rgb_n.push(tmp[el].match(/\d+/gi));
	let r = Number(rgb_n[0]).toString(16);
	let g = Number(rgb_n[1]).toString(16);
	let b = Number(rgb_n[2]).toString(16);
	return `#${r}${g}${b}`;
}
// console.log(convertRgbToHexa('rgb(255,200,130)'));
//---------------------------------------------------------------------------
function shuffleArray(arr){
	let len = arr.length;
	let shuffle = [];
	for (let i = 0; i < len; i++)
		shuffle.push(arr[~~(Math.random() * len)])
	return shuffle;
}

// console.log(shuffleArray(['a','b','c','d','e','f','g']))

function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex != 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
  }
  
  // Used like so
  var arr_m = [2, 11, 37, 42];
  shuffle(arr_m);
  console.log(arr_m);