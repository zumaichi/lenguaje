console.log("************** DELIVERABLE 02 *********************");
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const d = [10, 11, 12];

const concat = (a: number[], b: number[]) => {
  return [...a, ...b];
};
console.log("Concatenar dos arrays");
console.log(concat(a, b));

const concatMultiple = (...arrays: number[][]) => {
  let Concatenar: number[] = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      Concatenar.push(arrays[i][j]);
    }
  }
  return Concatenar;
};
console.log("Concatenar arrays de indistintamente el numero de arrays");
console.log(concatMultiple(a, b, c,d));
