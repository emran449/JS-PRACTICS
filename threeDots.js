const ages = [12, 21,33, 33, 43];
const ages2 = [23, 43, 22,12, 34];
const ages3 = [12, 32, 12, 12, 43];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2)

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisha);
console.log(maximum)