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

const displayMovements = function (movements) {
  movements.forEach((value, index, arr) => {
    const condition = value < 0 ? 'withdrawal' : 'deposit';
    const html = `  
    <div class="movements__row">
     <div class="movements__type movements__type--${condition}">${condition}</div>
     <div class="movements__value">${value}€</div>
   </div>
   `;
    //containerMovements.innerHTML += html;
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

const calcPrintBalance = accounts => {
  accounts.forEach(account => {
    account.total = account.movements.reduce((acc, cur) => acc + cur);
  });
};
calcPrintBalance(accounts);
createUserName(accounts);

const calcDisplaySummary = acc => {
  const income = acc.movements
    .filter(el => el > 0)
    .reduce((sum, cur) => sum + cur, 0);
  const spedning = acc.movements
    .filter(el => el < 0)
    .reduce((sum, cur) => sum + cur, 0);
  const interest = acc.movements
    .filter(el => el > 0)
    .map((el, i, arr) => (el * 1.2) / 100)
    .filter(el => el >= 1)
    .reduce((total, cur) => total + cur);

  labelSumInterest.innerHTML = `${interest}$`;
  labelSumIn.innerHTML = `${income}$`;
  labelSumOut.innerHTML = `${spedning}$`;
};

//Event handler
let currentAccount;
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    displayMovements(currentAccount.movements);
    calcDisplaySummary(currentAccount);
    labelBalance.textContent = `${currentAccount.total}$`;
    inputLoginPin.textContent = inputLoginUsername.textContentgit  = '';
    console.log('loggin');
  }
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
