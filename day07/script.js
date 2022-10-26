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
	let odds = 0, evens = 0;
	let i = -1;
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
	return Math.round(Math.random() * 100);
}

// console.log(randomUserIp());
//---------------------------------------------------------------------------------
function randomMacAddress(){
	
}

console.log(randomMacAddress());