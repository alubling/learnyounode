var numbers = process.argv.slice(2);
var result = 0;

function addElements(value, index, array) {
  result = result + parseInt(value);
};

numbers.forEach(addElements);

console.log(result);
