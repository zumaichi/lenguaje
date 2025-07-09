console.log("************** DELIVERABLE 02 *********************");
let array = [1, 2, 3, 4, 5];

const tail = (array: number[]) => {
  const [, ...rest] = array;
  return rest;
};

console.log(tail(array));
 