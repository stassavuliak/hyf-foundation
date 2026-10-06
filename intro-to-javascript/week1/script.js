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

// Housey pricey (A house price estimator)
const petersHouseParams = [8, 10, 10, 100, 2500000];
const juliasHouseParams = [5, 11, 8, 70, 1000000];

function costEstimate(params) {
  const volumeInMeters = params[0] * params[1] * params[2];
  const gardenSizeInM2 = params[3];
  const realPrice = params[4];
  const estimatedHousePrice =
    volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  const difference = Math.abs(realPrice - estimatedHousePrice);

  if (estimatedHousePrice < realPrice) {
    return `You are overpaying by ${difference}`;
  } else if (estimatedHousePrice > realPrice) {
    return `You are saving ${difference}`;
  } else {
    return `Estimated and real price are equal`;
  }
}

console.log(costEstimate(petersHouseParams));
