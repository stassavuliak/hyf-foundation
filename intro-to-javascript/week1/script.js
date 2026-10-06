// Age-ify
const yearOfBirth = 1992;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2022;
const dogYearOfFuture = 2045;
const dogYear = dogYearOfFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
  console.log("Your dog will be " + dogYear * 7 + " dog years old in 2027");
} else {
  console.log("Your dog will be " + dogYear + " human years old in 2027");
}
