console.log("************** DELIVERABLE 02 *********************");
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const concat = (a: number[], b: number[]) => {
  return [...a, ...b];
};
console.log("Concatenar dos arrays");
console.log(concat(a, b));
//opcional
const concatAlternative = (a: number[], b: number[], c: number[]) => {
  let Concatenar = [];
  for (let i = 0; i < a.length; i++) {
    Concatenar.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    Concatenar.push(b[i]);
  }
  for (let i = 0; i < c.length; i++) {
    Concatenar.push(c[i]);
  }
  return Concatenar;
};
console.log("Concatenar tres arrays de forma alternativa");
console.log(concatAlternative(a, b, c));
