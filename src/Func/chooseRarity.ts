export const chooseRarity = (probabilities: number[]) => {
  let cum = 0;
  const rnd = Math.random();

  const index = probabilities.findIndex((e) => {
    cum += e;
    return rnd < cum && rnd >= cum - e;
  });

  return index;
};
