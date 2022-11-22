'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((value, index, arr) => {
    const condition = value < 0 ? 'withdrawal' : 'deposit';
    const html = `  
    <div class="movements__row">
     <div class="movements__type movements__type--${condition}">${condition}</div>
     <div class="movements__value">${value}€</div>
   </div>
   `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUserName = accounts => {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  console.log(acc.balance);
  labelBalance.textContent = `${acc.balance}€`;
};
createUserName(accounts);
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const calcDisplaySummary = acc => {
  console.log(acc.interestRate);
  const income = acc.movements
    .filter(el => el > 0)
    .reduce((sum, cur) => sum + cur, 0);
  const spedning = acc.movements
    .filter(el => el < 0)
    .reduce((sum, cur) => sum + cur, 0);
  const interest = acc.movements
    .filter(el => el > 0)
    .map((el, i, arr) => (el * acc.interestRate) / 100)
    .filter(el => el >= 1)
    .reduce((total, cur) => total + cur);

  labelSumInterest.innerHTML = `${interest}$`;
  labelSumIn.innerHTML = `${income}$`;
  labelSumOut.innerHTML = `${spedning}$`;
};

//Event handler
let currentAccount;
currentAccount = account1;
updateUI(currentAccount);
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    containerMovements.textContent = '';
    inputLoginPin.blur();
    updateUI(currentAccount);
    // containerApp.style.opacity = 100;

    // inputLoginPin.textContent = inputLoginUsername.textContentgit = '';
    // console.log('loggin');
  }
});
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    account => account.username === inputTransferTo.value
  );
  if (
    amount > 0 &&
    receiverAcc?.username !== currentAccount.username &&
    currentAccount.balance >= amount
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }
  updateUI(currentAccount);
});
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});
btnClose.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputCloseUsername.value
  );
  if (
    currentAccount?.pin === Number(inputClosePin.value) &&
    currentAccount.username === inputCloseUsername.value
  ) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    containerApp.style.opacity = 0;
    accounts.splice(index, 1);

    inputCloseUsername.value = inputClosePin = '';
  }
});
let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
//console.log(accounts);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const balance = movements.reduce((acc, cur) => {
//   console.log(acc, cur);
//   return acc + cur;
// });
// console.log(balance);

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);

// console.log(deposits);
// console.log(withdrawals );

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}$`);
//   } else {
//     console.log(`You withdraw ${Math.abs(movement)}$`);
//   }
// }
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// function checkDogs(dogsJulia, dogsKate) {
//   let shallowCopyJulia = dogsJulia.slice(1, -2);
//   console.log(shallowCopyJulia);
//   let dogArr = shallowCopyJulia.concat(dogsKate);
//   console.log(dogArr);
//   dogArr.forEach((value, index, arr) => {
//     value > 3 ? console.log('adult') : console.log('puppy');
//   });
// }
// checkDogs(dogsJulia, dogsKate);

//CHALLENGE 2 CALC DOGS AGE

// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]

// const calcAvgHumanAge = ages => {
//   let humanAge = [];
//   ages.forEach((value, index) => {
//     humanAge[index] = value <= 2 ? 2 * value : 16 + value * 4;
//   });
//   const filterDogs = humanAge.reduce(
//     (total, current, index, arr) => total + current / arr.length,
//     0
//   );
//   console.log(humanAge);
//   console.log(filterDogs);

//   return humanAge;
// };
// calcAvgHumanAge([5, 2, 4, 1, 15, 8, 3]);

// const ranDice = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 100) + 1
// );
// console.log(ranDice);
// const diceRoll = Array.from(
//   { length: 100 },
//   () => Math.trunc(Math.random() * 6) + 1
// );
// console.log(diceRoll);

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += cur);
//       return sum;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// dogs.map(dog => {
//   dog.recommendedFood = dog.weight ** 0.75 * 28;
// });
// console.log(dogs);

// const sarahsDog = dogs.filter(dog => dog.owners.includes('Sarah'));

// sarahsDog[0].curFood > sarahsDog[0].recommendedFood
//   ? console.log('your dog is over eating')
//   : console.log('your dog is fine');
//console.log(sarahsDog[0]);

//const {overEatingDogs, notEatingEnough} = dogs.filter(dog => dog.curFood > dog.recommendedFood);

// const sums = dogs
//   .map(dog => {
//     console.log(dog);
//     return dog;
//   })
//   .reduce(
//     (sum, cur) => {
//       if (cur.curFood != cur.recommendedFood)
//         cur.curFood > cur.recommendedFood
//           ? sum.overEatingDogs.push(cur)
//           : sum.ownersEatTooLittle.push(cur);
//       cur.curFood > cur.recommendedFood * 0.9 &&
//         cur.curFood < cur.recommendedFood * 1.1 ? console.log(`${cur.owners} feeding enough`) : console.log();
//       return sum;
//     },
//     { overEatingDogs: [], ownersEatTooLittle: [] }
//   );

// console.log(sums);

// const { overEatingDogs, ownersEatTooLittle } = sums;
// let namesOverEat = [];
// overEatingDogs.forEach((el, i, arr) => {
//   namesOverEat[i] = el.owners;
// });
// namesOverEat = namesOverEat.flat();
// console.log(`${namesOverEat.join(' and ')}`);

// let namesTooLittleEat = [];
// ownersEatTooLittle.forEach((el, i, arr) => {
//   namesTooLittleEat[i] = el.owners;
// });
// namesTooLittleEat = namesTooLittleEat.flat();
// console.log(namesTooLittleEat);
