console.log("************** DELIVERABLE 01 *********************");
let array = [1, 2, 3, 4, 5];

const head = (array: number[]) => {
  const [first] = array;
  return first;
};
console.log("mostrar el primer elemento del array(destrucuturing)");
console.log(head(array));

const tail = (array: number[]) => {
  const [, ...rest] = array;
  return rest;
};
console.log("mostrar el todos del array menos el primero(rest)");
console.log(tail(array));

const init = (array: number[]) => {
  return array.slice(0, -1);
};
console.log("mostrar los todos del array menos el último(Array.prototype)");
console.log(init(array));

const last = (array: number[]) => {
  return array[array.length - 1];
};

console.log("mostrar el último elemento del array(funcion)");
console.log(last(array));
