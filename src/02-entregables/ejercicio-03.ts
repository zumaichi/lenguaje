console.log("************** DELIVERABLE 03 *********************");

function clone<T>(source: T): T {
  return { ...source };
}

function merge<T, Y>(source: T, target: Y): T & Y {
  return { ...target, ...source };
}
const a = {
  name: "pepe",
  surname: "perez",
  city: "jaen",
};

const b = {
  name: "maria",
  age: 25,
  married: true,
};

console.log("mostrar el objeto con las propiedades del objeto source");
console.log(clone(a));

console.log("mostrar el objeto con las propiedades del objeto source y target");
console.log(merge(a, b));
