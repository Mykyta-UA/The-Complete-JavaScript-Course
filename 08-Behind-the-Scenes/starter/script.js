'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      let str = `you are millenial ${age}`;
      console.log(str);
    }
    console.log(millenial);
  }
  printAge();
  return age;
}
const firstName = 'Mykyta';
calcAge(1997);
