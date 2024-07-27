// Step 1. Create a variable named myAge, and set it equal to your age as a number. Write a comment that explains this line of code.
const myAge = 165; // You're never too old to learn new things

// Step 2. Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change. Write a comment that explains this line of code.
let earlyYears = 2; // //Dogs age differently than humans, especially in their early years. The first two years of a dog's life are typically counted differently in the calculation. By setting earlyYears to 2, we're isolating these first two years for special treatment in the age calculation.

// Step 3. Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.
earlyYears *= 10.5;

// Step 4. Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. Set the result equal to a variable called laterYears. We’ll be changing this value later. Write a comment that explains this line of code.
let laterYears = myAge - 2; // We already have the first two years, so we need to subtract them from our age

// Step 5. Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step. Write a comment that explains this line of code.
laterYears *= 4; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment

// Step 6. If you’d like to check your work at this point, console log earlyYears and laterYears. Are the values what you expected?
// console.log(earlyYears, laterYears);

// Step 7. Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears. Write a comment that explains this line of code.
let myAgeInDogYears = earlyYears + laterYears; // adding the two variables together

// Step 8. Let’s use a string method next. Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName. The toLowerCase method returns a string with all lowercase letters. Write a comment that explains this line of code.
const myName = "Mecca".toLowerCase(); // output -> "mecca"

// Step 9. Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence: My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years. Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above. Write a comment that explains this line of code.
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

// Step 10. Great work! You can convert any human age to dog years. Try changing myAge and see what happens. If you’d like extra practice, try writing this project without the *= operator.
