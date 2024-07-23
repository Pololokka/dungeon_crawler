export const chooseRarity = (probabilities: number[]) => {
  let cum = 0;
  const rnd = Math.random();
  //common, uncommon, hard, heroic

  const index = probabilities.findIndex((e) => {
    cum += e;
    return rnd < cum && rnd >= cum - e;
  });

  return index;
};
