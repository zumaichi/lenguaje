console.log("************** DELIVERABLE 02 *********************");
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];
const concat = (a: number[], b: number[]) => {
  return [...a, ...b];
};
console.log(concat(a, b));
//opcional
const concatalternative = (a: number[], b: number[], c: number[]) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    result.push(b[i]);
  }
  for (let i = 0; i < c.length; i++) {
    result.push(c[i]);
  }
  return result;
};
console.log(concatalternative(a, b, c));
