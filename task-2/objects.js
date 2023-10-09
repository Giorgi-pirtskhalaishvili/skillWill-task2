//TASK #1

const user = [
  {
    name: "Lasha",
    age: 21,
  },
  {
    name: "Temo",
    age: 25,
  },
  {
    name: "Ana",
    age: 28,
  },
];

const compareAge = (users) => {
  let youngest = users[1];

  for (let i = 0; i < users.length; i++) {
    if (youngest.age > users[i].age) {
      youngest = users[i].name;
    }
  }
  return youngest;
};
console.log(compareAge(user));

// TASK #2

const diceGame = (a, b) => {
  let winner = null;
  let rollA = 0;
  let rollB = 0;
  while (winner === null) {
    const playerA = Math.floor(Math.random() * 6) + 1;
    const playerB = Math.floor(Math.random() * 6) + 1;
    console.log(`${a} rools ${playerA}`);
    console.log(`${b} rools ${playerB}`);
    rollA++;
    rollB++;
    console.log(`${a} count is ${rollA}`);
    console.log(`${b} count is ${rollB}`);
    if (playerA === 3) {
      return (winner = a);
    } else if (playerB === 3) {
      return (winner = b);
    }
  }
  return winner;
};
const result = diceGame("gio", "dato");
console.log(result);

//Task 3

const copyMaker = (anyObj) => {
  const user2 = {};

  for (const props in anyObj) {
    user2[props] = anyObj[props];
  }

  return user2;
};

const USER = {
  name: "giorgi",
  age: 26,
  "codind skills": "astonishing",
};

const userCopy = copyMaker(USER);
userCopy.age = 30;
console.log(USER.age);
console.log(userCopy.age);
