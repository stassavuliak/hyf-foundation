/**
 * Create a function called getFullName that returns a fullname.
 * It should have two parameters: firstName and surname.
 * Now try to create two variables fullName1 and fullName2 these two variables
 * should be assigned to calling the getFullName function.
 * Log out the two fullname variables.
 */

const getFullName = (firstName, surname, useFormalName, isWoman) => {
  const fullName = `${firstName} ${surname}`;
  if (useFormalName && isWoman) return `Lady ${fullName}`;
  if (useFormalName) return `Lord ${fullName}`;
  if (!firstName.trim() || !surname.trim())
    return "Provide first name and surname";
  return fullName;
};

const fullName1 = getFullName("Benjamin", "Hughes", true, true);
const fullName2 = getFullName("Stanislav", "");

console.log(fullName1);
console.log(fullName2);

/**
 * Another customer has contacted us. They work for a secret company that rhymes with foogle.
 * The customer works on their calendar application. They need some functionality to help with
 * writing what weekday an event is held.You specify how many days from today an event is being held.
 * The function then figures out what weekday the event is being held. Here is an example:
 * Today is Sunday and the event is in 5 days. Therefore the event will be held on a Friday.
 */

const getEventWeekday = (daysUntilEvent) => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const todayIndex = new Date().getDay();
  const eventDay = week[(todayIndex + daysUntilEvent) % 7];
  return eventDay;
};

/**
 *Create a function (that you have to name) that has temperature as parameter.
  Based on the temperature it should return a string with what the user should wear. 
  You decide what the user should wear based on the temperature.
 */

const recommendWhatToWear = (temperature) => {
  if (temperature < 10) return "Jacket";
  if (temperature < 20) return "Hoodie";
  return "shorts and a t-shirt";
};

const clothesToWear = recommendWhatToWear(21);

/**
 * Student manager
   A coding school have contacted us to make some functionality for managing their classes. 
   We will create functionality for adding students to a class. 
   For this exercise you need to figure out how Array.push works. Learn about the concept by researching about it.
 */

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (!studentName.trim()) return `You didn't provide student name!`;
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }
  if (class07Students.length >= 6 && studentName !== "Queen")
    return `Cannot add more students to class 07`;
  if (studentName === "Queen") class07Students.push(studentName);
  if (class07Students.length <= 6) class07Students.push(studentName);
}

function getNumberOfStudents(studentList) {
  // You write code here
  return class07Students.length;
}

/**
 * Candy helper optional
  We are at the candy store. We have taken some shovels of the caramel-strawberry-cola-lemon-gravy wine gums, 
  a few of the banana chocolate diesel-motors and a handful of the salmon-potato covered toffee encrusted pizzas. 
  But what is all this worth? And can you even afford it?
  Let's solve this problem with some functions.

  addCandy function
  Create a function called addCandy. It has two parameters:
  candyType - specifies the candy type. Could be 'sweet, chocolate, toffee or chewing-gum'
  weight - specifies the weight of the candy in grams

  The function should add the price of the candy to an array called boughtCandyPrices using push
 */

const boughtCandyPrices = [];
const candyPrices = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGym: 0.03,
};

const addCandy = (candyType, weight, boughtCandyPrices, candyPrices) => {
  boughtCandyPrices.push(candyPrices[candyType] * weight);
  return boughtCandyPrices;
};

console.log(addCandy("sweet", 20, boughtCandyPrices, candyPrices));
console.log(addCandy("chocolate", 10, boughtCandyPrices, candyPrices));
console.log(addCandy("toffee", 35, boughtCandyPrices, candyPrices));

const amountToSpend = Math.random() * 100;
console.log(amountToSpend);

const canBuyMoreCandy = (boughtCandy, amountToSpend) => {
  let sum = 0;

  // for (let i = 0; i < boughtCandy.length; i++) {
  //   sum += boughtCandy[i];
  // }

  let i = 0;
  while (i < boughtCandy.length) {
    sum += boughtCandy[i];
    i++;
  }

  return sum < amountToSpend;
};

console.log(canBuyMoreCandy(boughtCandyPrices, amountToSpend));
