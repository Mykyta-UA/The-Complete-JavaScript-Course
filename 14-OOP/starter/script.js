'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const person1 = new Person('Mykyta', 1997);
// console.log(person1);
// const person2 = new Person('Rob', 1993);

// console.log(person2.firstName);

// Person.prototype.calcAge = function () {
//   console.log(2022 - this.birthYear);
// };
// person1.calcAge();

// console.log(person1.__proto__.__proto__);

// const arr = [1, 1, 23, 3];
// console.log(arr.__proto__);

//Coding challenge #1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.increaseSpeed = function () {
//   this.speed += 10;
//   console.log(`the new speed is ${this.speed}km/h`);
// };

// let mazda = new Car('Mazda', 90);

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.year);
//   },
// };

// const mykyta = Object.create(PersonProto);

// console.log(PersonProto, mykyta);
// mykyta.year = 1997;

// mykyta.calcAge();

//Coding challenge #3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`the new speed is ${this.speed}km/h`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.chargeTo = chargeTo;
// };
// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// tesla.accelerate();
// console.log(tesla);

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.age);
//   },

//   init(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
//   },
// };

// const mykyta = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, age, course) {
//   PersonProto.init.call(this, firstName, age);
//   this.course = course;
// };
// mykyta.init('Mykyta', 1997);
// console.log(mykyta);
// StudentProto.introduce = function () {
//   console.log(`Students name is ${this.firstName}`);
// };
// const rob = Object.create(StudentProto);

// rob.init('Robert', 1993, 'Programming');
// // rob.introduce();

// class Account {
//   constructor(owner, currency, pin, movements) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     this.movements = [];
//     this.locale = navigator.language;
//   }

//   deposit(val) {
//     this.movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }
//   requestLoan() {
//     return
//   }
// }

// const acc1 = new Account('Mykyta', 'HRN', 1111, 900);

// Challenge #3
class CarlCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(
      `${this.make} has increased speed on 10 km, new speed is ${this.speed}km/h`
    );
  }
  brake() {
    this.speed -= 5;
    console.log(`Speed has been decreased, Speed: ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarlCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} has increased speed, new speed is ${
        this.speed
      }km/h, battery at ${this.#charge}%`
    );
    return this;
  }
}

const tesla = new EVCl('Tesla', 100, 100);
