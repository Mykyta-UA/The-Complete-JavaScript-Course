'use strict';
// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassangers = 1,
//   price = 10 * numPassangers
// ) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('lot212', undefined, 2);

//************************************************** */
// const flight = 'lot345';
// let mykyta = {
//   name: 'mykyta',
//   passport: 2345432,
// };
// const checkIn = function (flightNum, passanger) {
//   flightNum = 'lot565';
//   passanger.name = 'Mr ' + passanger.name;

//   if (passanger.passport === 2345432) {
//     alert('check in');
//   } else {
//     alert('wrong passport');
//   }
// };
// checkIn(flight, mykyta);
// console.log(flight);
// console.log(mykyta);

// *****************************************************
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWorld = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// const transformer = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`transformed: ${fn(str)}`);
//   console.log(`transformed by ${fn.name}`);
// };

// transformer('Javascript is hard!', upperFirstWorld);

// *****************************************************
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };

// const greets = greet('hey');
// greets('mykyta');

// const greet = greeting => name => console.log(greeting, name);

// greet('yo')('nick');
// const luftansa = {
//   airline: 'lufthnasa',
//   iataCode: 'LH',
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} at ${this.iataCode} ${flightNum}`
//     );
//   },
// };

// luftansa.book('lot213', 'mykyta');
// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'mau11',
//   booking: [],
// };

// const book = luftansa.book;

// book.call(eurowings, 21, 'mykyta');
// console.log(eurowings);

//  CODING CHALLENGE #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    let answer = Number(
      prompt(
        `${this.question}\n${poll.options.join('\n')}\n(Write option number)\n`
      )
    );
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

//poll.registerNewAnswer();
let answerPoll = document.querySelector('.poll');
answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] });
