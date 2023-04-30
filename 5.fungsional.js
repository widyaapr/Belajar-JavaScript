// Pure Function
const hitungluas = (jarijari) => {
  return 3.14 * (jarijari * jarijari);
};

console.log(hitungluas(4));

// Contoh 2
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: 'Bobo',
};

const newPerson = createPersonWithAge(18, person);
console.log({
  person,
  newPerson,
});

// contoh 3 Rekursi
const countDown = (start) => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};

countDown(10);
