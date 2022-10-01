// 'use strict';

// // Data needed for a later exercise
// // const flights =
// //   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours,

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// //code challenge
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);
// let events = [...new Set(gameEvents.values())];
// // for (let [timeEvent, gameEvent] of gameEvents) {
// //   events.add(gameEvent);
// // }
// console.log(typeof events);
// gameEvents.delete(64);
// console.log(gameEvents);
// // const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
// // console.log(ordersSet);
// // const scorers = {};
// // scorers;
// // for (const player of game.scored) {
// //   console.log(player);
// //   console.log(scorers[player]);
// //   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// // }
// // console.log(scorers);
// // for (let [x, i] of game.scored.entries()) {
// //   console.log(`Goal ${x + 1} was made by ${i}`);
// // }

// // let average = 0;
// // let odds = Object.values(game.odds);
// // console.log(odds);
// // for (let item of odds) {
// //   average += item;
// // }
// // average /= odds.length;
// // console.log(average);

// // for (let [name, i] of Object.entries(game.odds)) {
// //   const stringWin = name === 'x' ? 'draw' : `${game[name]} has won ${i}`;
// //   console.log(stringWin);
// // }
// // const [players1, players2] = game.players;

// // const [gk, ...fieldPlayers] = players1;

// // const allPlayers = [...players1, ...players2];

// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // const {
// //   odds: { team1, x: draw, team2 },
// // } = game;

// // function printGoals(...players) {
// //   console.log(players.length);
// // }
// // printGoals(...game.scored);

// //team1 < team2 && console.log('team 2 has more chances to win ');

// // const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// // const [x, y, z] = arr;

// // console.log(x);
// // console.log(y);
// // console.log(z);

// // const [starter, mainCourse] = restaurant.order(1, 2);
// // console.log(mainCourse, starter);
// // const badArr = [5, 6, 7];
// // const newArr = [1, 2, 3, ...badArr];
// // console.log(newArr);

// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// // console.log(menu);

// // for (const item of menu) {
// //   console.log(item);
// // }
// const values = Object.values(openingHours);
// console.log(values);
// console.log(openingHours);
// console.log(Object.keys(openingHours));
// console.log(Object.entries(openingHours));

// STRINGS

const airline = 'TAP air Portugal';

const word = 'talent is just a talent';

console.log(word.replaceAll('talent', 'gift'));
