let array1 = [17, 21, 23];
let array2 = [12, 5, -5, 0, 4];
let alert = "";
function printForecast(arrayTemp) {
  for (let i = 0; i < arrayTemp.length; i++) {
    let messege = `... ${arrayTemp[i]}C in ${i + 1} days`;
    console.log(messege);
    alert += messege;
    console.log(alert);
  }
}
printForecast(array1);
