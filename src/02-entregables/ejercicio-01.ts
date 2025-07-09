console.log("************** DELIVERABLE 01 *********************");
let array = [1, 2, 3, 4, 5];

const head = (array: number[]) => {
  const [first] = array;
  return first;
};

console.log(head(array));
