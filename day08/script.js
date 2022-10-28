// let dog = {};

// // console.log(dog);
// dog.name = 'john';
// dog.legs = 4;
// dog.color = 'white';
// dog.age = 8;
// dog.bark = function(){ return 'woof-woof';}
// // console.log(dog);
// console.log(dog.name)
// console.log(dog.legs)
// console.log(dog.color)
// console.log(dog.age)
// console.log(dog.bark())
// dog.breed;
// dog.getDogInfo;
// console.log()
//--------------------------------------------------------------------------
const users = {
	Alex: {
	  email: 'alex@alex.com',
	  skills: ['HTML', 'CSS', 'JavaScript'],
	  age: 20,
	  isLoggedIn: false,
	  points: 30
	},
	Asab: {
	  email: 'asab@asab.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
	  age: 25,
	  isLoggedIn: false,
	  points: 50
	},
	Brook: {
	  email: 'daniel@daniel.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
	  age: 30,
	  isLoggedIn: true,
	  points: 50
	},
	Daniel: {
	  email: 'daniel@alex.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	},
	John: {
	  email: 'john@john.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
	  age: 20,
	  isLoggedIn: true,
	  points: 50
	},
	Thomas: {
	  email: 'thomas@thomas.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'React'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	},
	Paul: {
	  email: 'paul@paul.com',
	  skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
	  age: 20,
	  isLoggedIn: false,
	  points: 40
	}
  }
//-------------------------------------------------------------------------------------
//Find the person who has many skills in the users object
let max = 0;
let us;

for (let key in users){
	if (users[key].skills.length > max)	{
		max = users[key].skills.length;
		us = key;
	}
  }

//  console.log(us);
//--------------------------------------------------------------------------------------
//Count logged in users, count users having greater than equal to 50 points from the following object
let VIPUsers = []
for (key in users){
	if (users[key].points >= 50)
		VIPUsers.push(key);
}

// console.log(VIPUsers);
//---------------------------------------------------------------------------------------
//Find people who are MERN stack developer from the users object('MongoDB', 'Express', 'React', 'Node')
let mern = []
for (k in users){
	if (users[k].skills.includes('MongoDB', 'Express', 'React', 'Node'))
		mern.push(k)
}

// console.log(mern)
//----------------------------------------------------------------------------------------
users.Yana = { email: 'yonoyko@.com',
				skills: ['HTML', 'CSS', 'JavaScript'],
				age: 10,
				isLoggedIn: false,
				points: 20};
// console.log(users)

// console.log(Object.keys(users))

// console.log(Object.values(users))

// console.log(Object.entries(users))
//---------------------------------------------------------------------------------------
