
## Demo

live link: https://wedding-management-76038.web.app/

# Technology
React,Node,Mongodb,Express,Firebase,Tailwind


             ## MCQ TEST

#### Question 1. write the correct answer from the following options and give an explanation (2-5 lines)
let greeting;\
greetign = {};\
console.log(greetign);

• A: {}\
• B: ReferenceError: greetign is not defined\
• C: undefined

Answer: • A: {}

#Explanation:
This is because when we have successfully assigned an empty object to the variable greetign, and when we log it to the console, it will display the empty object, which is represented as {} in JavaScript.

####  Question 2. write the correct answer from the following options and give an explanation (2-5 lines)

function sum(a, b) {
  return a + b;
}

sum(1, "2");

• A: NaN\
• B: TypeError\
• C: "12"\
• D: 3

Answer:  C: "12"

#Explanation:\In the given code, the sum function takes two arguments, a and b, and attempts to add them together using the + operator. When we call sum(1, "2"), JavaScript performs type coercion and converts the number 1 to a string to match the type of "2". Then, it concatenates the two strings, resulting in "12". So, the function returns the string "12".



####  Question 3. write the correct answer from the following options and give an explanation (2-5 lines)

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

• A: ['🍕', '🍫', '🥑', '🍔']\
• B: ['🍝', '🍫', '🥑', '🍔']\
• C: ['🍝', '🍕', '🍫', '🥑', '🍔']\
• D: ReferenceError

Answer: A. ['🍕', '🍫', '🥑', '🍔']

Explanation: In this code, we first create an array food containing four emojis. Then, we create an object info with a property favoriteFood assigned to the first element of the food array, which is "🍕". Afterward, we change the value of info.favoriteFood to "🍝", but this change does not affect the original food array. Therefore, when we log food to the console, it remains unchanged and still contains the original elements: ['🍕', '🍫', '🥑', '🍔'].


####  Question 4. write the correct answer from the following options and give an explanation (2-5 lines)

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());\
• A: Hi there,\
• B: Hi there, undefined\
• C: Hi there, null\
• D: ReferenceError

Answer: B. Hi there, undefined

Explanation: In the sayHi function, there's an interpolation attempt with ${name} to insert the name variable's value. However, when we call sayHi() without passing any arguments, the name parameter inside the function is undefined. Therefore, the function returns "Hi there, undefined" as a result.



####  Question 5. write the correct answer from the following options and give an explanation (2-5 lines)

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

• A: 1
• B: 2
• C: 3
• D: 4

Answer: C.3

Explanation: In the given code, we have an array nums containing four numbers. The forEach method iterates over each element in the array and executes the provided function for each element. The function checks if the element num is truthy (i.e., not equal to 0). For three of the elements in the array (1, 2, and 3), the condition is true, so count is incremented by 1 each time. As a result, count becomes 3 after all iterations, so the console.log(count) statement will output 3.






