export const probabilityCalc = (totalNumber: number, chances: number) => {
  const chance = Math.ceil(Math.random() * totalNumber);

  return chance <= chances ? true : false;
};
