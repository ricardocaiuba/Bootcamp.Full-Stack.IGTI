"use strict"; // o JavaScript acusa mais erros
console.log("DOM loaded.");

// var x let
/*
var tem escopo abrangente
let tem o escopo reduzido
*/

function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log(`var i -> ${i}`);
  }

  i = 20;
  console.log(` i -> ${i}`);
}

function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log(`let i -> ${i}`);
  }

  //   i = 20;
  //   console.log(` i -> ${i}`);
}

withVar();
withLet();

// const -> não podemos atribuir
const c = 10;
console.log(`const c -> ${c}`);
//c = 20;

const d = [];
console.log(`const d -> ${d}`);
d.push(1);
d.push(2);
console.log(`const d -> ${d}`);
d.push(4);
d.push(5);
console.log(d);

// functions x arrow functions

function sum(a, b) {
  return a + b;
}
console.log("sum(4, 7) with function -> ", sum(4, 7));

// função anônima
const sum2 = function (a, b) {
  return a + b;
};
console.log("sum2(4, 7) with const function -> ", sum2(4, 7));

// arrow function
const sum3 = (a, b) => a + b;
console.log("sum3(4, 7) with arrow function -> ", sum3(4, 7));

const sum4 = (a, b) => {
  return a + b;
};
console.log("sum4(4, 7) with arrow function -> ", sum4(4, 7));

// template literals
const name = "Ricardo";
const surName = "Rodrigues";
const test1 = "Meu nome é " + name + " " + surName + ".";
console.log(
  "String concatenate: ('Meu nome é ' + name + ' ' + surName + '.') -> ",
  test1
);

const test2 = `Meu nome é ${name} ${surName}.`;
console.log(
  "String concatenate with template literals (`Meu nome é ${name} ${surName}.`) -> ",
  test2
);

// default parameters
const sum5 = (a = 4, b = 10) => a + b;
console.log(
  "sum5() with arrow function (default parameters: const sum5 = (a = 4, b = 10) => a + b;) -> ",
  sum5()
);
