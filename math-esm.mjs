const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

// another pattern of exporting your modules
export const multiply = (a, b) => {
  return a * b;
};
export const divide = (a, b) => {
  return a / b;
};
export default {
  add,
  subtract,
};
