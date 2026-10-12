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
const petersHouseParams = {
  width: 8,
  depth: 10,
  height: 10,
  gardenSizeInM2: 100,
  realPrice: 2500000,
};

const juliasHouseParams = {
  width: 5,
  depth: 11,
  height: 8,
  gardenSizeInM2: 70,
  realPrice: 1000000,
};

function costEstimate(params) {
  const volumeInMeters = params.width * params.depth * params.height;
  const gardenSizeInM2 = params.gardenSizeInM2;
  const realPrice = params.realPrice;
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

// Ez Namey (Startup name generator)
const firstWords = [
  "Easy",
  "Smart",
  "Bright",
  "Fast",
  "Next",
  "Digital",
  "Fresh",
  "Super",
  "Simple",
  "Global",
];

const secondWords = [
  "Tech",
  "Solutions",
  "Labs",
  "Works",
  "Hub",
  "Space",
  "Flow",
  "Systems",
  "Studio",
  "Ventures",
];

function getRandomName(firstWord, secondWord) {
  const randomNumber = Math.floor(Math.random() * 10);
  const startupName = `${firstWord[randomNumber]} ${secondWord[randomNumber]}`;
  const startupNameLength = startupName.length;

  return `The startup: "${startupName}" contains ${startupNameLength} characters`;
}

console.log(getRandomName(firstWords, secondWords));
