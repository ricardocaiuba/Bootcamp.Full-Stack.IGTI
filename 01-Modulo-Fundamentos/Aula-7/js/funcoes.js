function sum(a, b) {
  return a + b;
}

console.log("Funções:");
console.log("   -> sum(1, 2):", sum(1, 2));

function compareNumbers(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
}
console.log("   -> compareNumbers(1, 1):", compareNumbers(1, 1));
console.log("   -> compareNumbers(1, 2):", compareNumbers(1, 2));
console.log("   -> compareNumbers(2, 1):", compareNumbers(2, 1));

function superSum(from, upTo) {
  var sum = 0;
  for (var i = from; i <= upTo; i++) {
    sum += i;
  }
  return sum;
}
console.log("   -> superSum(1, 10):", superSum(1, 10));
console.log("   -> superSum(2, 10):", superSum(2, 10));
console.log("   -> superSum(1, 9):", superSum(1, 9));
