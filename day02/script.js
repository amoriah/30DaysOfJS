//-----using methods-------------------------
let challenge = '30 Days Of JavaScript';
// console.log(challenge);
// console.log(challenge.length);

let challengeUp = challenge.toLocaleUpperCase();
// console.log(challengeUp);

let challengeLow = challenge.toLowerCase();
// console.log(challengeLow);

let first_word = challenge.substring(0, 2);
// console.log(first_word)

let inc = challenge.includes('Script')
// console.log(inc)

let arr = challenge.split(' ');
// console.log(arr);

let companys = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(',');
// console.log(companys);

let ptn = challenge.replace('JavaScript', 'Python');
// console.log(ptn);

let charChall = challenge.charAt(15);
// console.log(charChall);

let codeChall = challenge.charCodeAt('J');
// console.log(codeChall);

let ind = challenge.indexOf('a');
// console.log(ind);

let indLast = challenge.lastIndexOf('a');
// console.log(indLast);

let because = 'You cannot end a sentence with because because because is a conjunction'.indexOf('because');
// console.log(because);

let lastBecause = 'You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because');
// console.log(lastBecause);

let srch = 'You cannot end a sentence with because because because is a conjunction'.search('because');
// console.log(srch);

let noSpases = ' 30 Days Of JavaScript '.trim();
// console.log(noSpases);

let tr = challenge.startsWith('30');
// console.log(tr);

let fl = challenge.endsWith('JavaScript');
// console.log(fl);

let a = challenge.match(/a/g);
// console.log(a);

let rpt = challenge.repeat(2);
// console.log(rpt);

// console.log('The quote \'There is no exercise better for the heart than reaching down and \
// lifting people up.\' by John Holmes teaches us to help one another.')

// console.log("Love is not patronizing and charity isn't about pity, it is about love. \
// Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let ten = '10';
// console.log(typeof Number(ten));

// console.log(Math.ceil(parseFloat('9.8')));

// console.log('python'.search('on') === 'jargon'.search('on'));

// console.log('I hope this course is not full of jargon'.includes('jargon'));

// console.log(Math.random() * 101);

// console.log((Math.random() * 50) + 50);

// console.log('JavaScript'[Math.ceil(Math.random() * 'JavaScript'.length - 1)]);

let one = 0,
	two = 1,
	three = 0,
	four = 1,
	five = 1;
console.log(`${one += 1} ${two} ${three += 1} ${four} ${five}\n`);
// console.log(`${one += 1} ${two} ${three += 1} ${four + four + three} ${five}\n`);


