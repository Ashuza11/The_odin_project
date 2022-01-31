// Pseudo Code 
/*  1. When a user inputs a number
    2. Loop from 1 to the entered number
    3. If the current number is divisible by 3 then print "Fizz"
    4. If the current number is divisible by 5 then print "Buzz"
    5. If the current number is divisible by 3 and 5 then print "FizzBuzz"
    6. Otherwise print the current number 
*/

// 1
let answer = parseInt(prompt("Enter the number you would like to FizzBuzz up to: "));
// 2
for (let i = 1; i <= answer; i++) {
    // 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    // 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    // 4
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    // 6
    else {
        console.log(i);
    }
}