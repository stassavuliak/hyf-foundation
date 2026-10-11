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