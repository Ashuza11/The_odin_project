
// // console.log(23 + 97);


// // console.log(4 + 6 + 9);

// // let d = 4, b = 6, c = 9;

// // dnswer = (d + b + c) / 77;

// // console.log(dnswer.toFixed(3));



// // let d = 10;
// // console.log(d);

// // let c = 9 * d;
// // console.log(c);

// // let b = 7 * d; 

// // console.log(b);

// // const mdx = 57;

// // let dctudl = mdx - 13;

// // let percentdge = dctudl / mdx

// // console.log(percentdge.toFixed(4));


// // let a = 5;

// // a++;
// // console.log(a);

// userName = prompt("What's your name ?:")

// answer = `${userName}, I am a student in cs and web design.`

// console.log(answer)


// let numOne = 20;
// let numTwo = 22;
// let numThree = 23;
// let numFour = 24;

// sum = numOne + numTwo;
// substract = numThree - numFour;

// finalResult = sum * substract;

// console.log(finalResult);



// let a = 'a'
// let b = 'b'
// if (a < b) { // true
//   console.log(a + ' is less than ' + b)
// } else if (a > b) {
//   console.log(a + ' is greater than ' + b)
// } else {
//   console.log(a + ' and ' + b + ' are equal.')
// }

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i ); // a prime
//   }
// }

// showPrimes(6) 

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   else {
//     return confirm('Did parents allow you ?');
//   }
// }



// // Function declaration 
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Did parents allow you ?');
// }
// checkAge(30);

// // Function expretion
// let answer;
// let checkAge = function(age) {
//   answer = (age > 18) ? true : alert('Did your parents allow you ?');
//   return answer;
  
// }
// checkAge(10);


// Arrow function
// let checkAge = (age) => {
//   let aswer = (age > 18) ? true : console.log('Did your parents allow you ?');
//   return answer;
// }
// checkAge(20);


// // Shorter version
// let checkAge = (age) => (age > 18) ? true : alert('Did your parents allow you ?');


// let double = n => n * 2;
// console.log(double(3));


// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello') :
//   () => alert("Greetings!");

// welcome();


// Function expression 

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// // Arrow Function 
// let ask = (question, yes, no) => confirm(question) ?  yes() : no();

// ask(
//   'Do you agree ?',
//   () => alert('You agreed.'),
//   () => alert('You canceled the execution')
// );

// The odin execises 

// 1. Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
  return number + 7;
}
console.log(add7(1));
// An other way 
let add3 = (number) => number + 3;
console.log(add3(2));


// 2. Write a function called multiply that takes 2 numbers and returns their product.

let multiply = (a, b) => a * b;
console.log(multiply(2, 3));

let exposent = function(a, b) {
  return a**b;
}
console.log(exposent(3,2));

// 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(letter) {
  let capitalizeWord = letter.charAt(0).toUpperCase() + letter.slice(1);
  return capitalizeWord;
}
console.log(capitalize('albono'));

// 4. Rite a function called lastLetter that takes a string and returns the very last letter of that string:lastLetter("abcd") should return "d"

let lastLetter = function(word) {
  let lastLetter = word.charAt(word.length - 1)
  return lastLetter;
}

console.log(lastLetter('abc'));

