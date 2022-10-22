// let str = "javascript";
// let num = 3;
// str[3] = 'a';
// num += 2;
// console.log(str);
// console.log(num);
//------------------objects-----------------------------
// let nums = [1, 2, 3];
// let numbers = [1, 2, 3];
// console.log(nums == numbers); // false
//--------------------Math object------------------------
// const randNum = (Math.random() * 11); // creates random number between 0 to 0.999999
// const randNum2 = Math.floor(randNum); // creates random number between 0 to 0.999999
// const randNum3 = Math.ceil(randNum); // creates random number between 0 to 0.999999
// console.log(randNum)
// console.log(randNum2)
// console.log(randNum3)

// let randomNum = Math.random()         // generates 0 to 0.999
// let numBtnZeroAndTen = randomNum * 11
// console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

// let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
// console.log(randomNumRoundToFloor)    // this gives between 0 and 10
//----------------strings------------------------------
// let space = ' '           // an empty space string
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let quote = "The saying,'Seeing is Believing' is not correct in 2020."
// let quotWithBackTick = `The saying,'Seeing is Believing' is not correct in 2020.`
// console.log(quotWithBackTick);
//--------------------long string-----------------------------------------------
// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."

// console.log(paragraph)
//----------------Escape Sequences in Strings---------------------------------------------
// console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
// console.log('Days\tTopics\tExercises')
// console.log('Day 1\t3\t5')
// console.log('Day 2\t3\t5')
// console.log('Day 3\t3\t5')
// console.log('Day 4\t3\t5')
// console.log('This is a backslash  symbol (\\)') // To write a backslash
// console.log('In every programming language it starts with "Hello, World!"')
// console.log("In every programming language it starts with \'Hello, World!\'")
// console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
//----------------Template Literals (Template Strings)---------------------------
// console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
// let a = 2
// let b = 3
// console.log(`The sum of ${a} and ${b} is ${a + b}`) // injecting the data dynamically

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// let country = 'Finland'
// let city = 'Helsinki'
// let language = 'JavaScript'
// let job = 'teacher'
// let age = 250
// let fullName = firstName + ' ' + lastName

// let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
// let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
// console.log(personInfoTwo)
// console.log(personInfoThree)

// let a = 5
// let b = 3
// console.log(`${a} is greater than ${b}: ${a > b}`)
// //----------------string's methods--------------------
// let string = '30 Days Of JavaScript'

// console.log(string.split()) 
// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))
// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// // console.log(string.match('love'))
// let pattern = /love/gi;
// console.log(string.match(pattern))   // ["love", "love", "love"]


let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/;

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

/*
 методы строк: 
- string.repeat(n)
- string.match(str)
- string.search(substring)
- string.endsWith(substring)
- string.startsWith(substring)
- string.concat(substring, substring, substring)
- string.lastIndexOf(substring)
- string.indexOf(substring)
- string.charCodeAt(index)
- string.charAt(index)
- string.replace(oldsubstring, newsubstring)
- string.includes(str)
- string.trim(str)
- string.split(str);
- string.substring(starr, and)
- string.substr(4,6)
- string.toLowerCase()
- string.toUpperCase()
- string.length
*/