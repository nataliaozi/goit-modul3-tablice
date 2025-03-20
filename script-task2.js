// const numbers = [2, 4, 6, 7, 8, 12, 34, 1, 3];
// console.log("Liczby większe od 5 to:");
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > 5) {
//     console.log(numbers[i]);
//   }
// }

const numbers = [2, 4, 6, 7, 8, 12, 34, 1, 3];
console.log("Liczby większe od 5 to :");
for (let number of numbers) {
  if (number > 5) {
    console.log(number);
  }
}
