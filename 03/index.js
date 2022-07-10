let rand = Math.random();

console.log(rand);

let randMaker = () => {
  return Math.round(rand * 20) + 20;
};

console.log(randMaker());
