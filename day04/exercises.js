//chack age
// let age = Number(prompt("Enter your age:"))
// if (age >= 18)
// 	alert('You are old enough to drive');
// else
// 	alert(`You are left with ${18 - age} years to drive`);

//grades
let grade = Number(prompt("Enter your grade:"));
switch (grade) {
	case (grade >= 80 && grade <= 100):
		alert('A');
		break;
	case (grade >= 70 && grade <= 79):
		alert('B');
		break;
	case (grade >= 60 && grade <= 69):
		alert('C');
		break;
	case (grade >= 50 && grade <= 59):
		alert('D');
		break;
	case (grade >= 0 && grade <= 49):
		alert('F');
		break;
	default:
		alert('wrong enter');
}