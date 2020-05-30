console.log("hello world!");

// var title = document.querySelector("h1");
// title.textContent = "Ricardo Rodrigues - Lobão";

console.log("Tipo number:");
console.log("   -> 5: ", 5);
console.log("   -> 3 + 12: ", 3 + 12);
console.log("   -> typeof(3 + 12): ", typeof (3 + 12));

console.log("Tipo string:");
console.log("   -> 'Ricardo': ", "Ricardo");
console.log("   -> typeof('Ricardo'): ", typeof "Ricardo");

console.log("Tipo boolean:");
console.log("   -> true: ", true);
console.log("   -> typeof(true): ", typeof true);

console.log("Tipo object:");
console.log("   -> [1, 2]: ", [1, 2]);
console.log("   -> typeof([1, 2]): ", typeof [1, 2]);
console.log("   -> {id: 1, name:'Ricardo'}: ", { id: 1, name: "Ricardo" });
console.log(
  "   -> typeof({id: 1, name:'Ricardo'}): ",
  typeof { id: 1, name: "Ricardo" }
);
console.log("Tipo undefined:");
var a;
console.log("   -> var a: ", a);
console.log("   -> typeof(a): ", a);

console.log("Tipo null:");
var b = null;
console.log("   -> var b = null: ", b);
console.log("   -> typeof(b): ", b);

console.log("Variáveis:");
var num1 = 5;
console.log("   -> var num1 = 5: ", num1);
var num2 = 7;
console.log("   -> var num2 = 5: ", num2);

var temp = num1;

console.log("   -> var temp = num1: ", temp);
num1 = num2;
console.log("   -> num1 = num2: ", num1);
num2 = temp;
console.log("   -> num2 = temp: ", num2);

console.log("Operadores de Soma:");
console.log("   -> 9 + 8: ", 9 + 8);

console.log("Operadores de Subtração:");
console.log("   -> 9 - 8: ", 9 - 8);

console.log("Operadores de Multiplicação:");
console.log("   -> 9 * 8: ", 9 * 8);

console.log("Operadores de Divisão:");
console.log("   -> 9 / 8: ", 9 / 8);

console.log("Operadores de Exponenciação:");
console.log("   -> 9 ** 8: ", 9 ** 8);

console.log("Resto da divisão:");
console.log("   -> 9 % 8: ", 9 % 8);

console.log("Atribuição:");
var att = 5;
console.log("   -> var att = 5: ", att);
console.log("   -> att += 3: ", (att += 3));

console.log("Comparação:");
console.log("   -> 6 === 6: ", 6 === 6);
console.log("   -> 6 === '6': ", 6 === "6");
console.log("   -> 6 == '6': ", 6 == "6");
console.log("   -> 6 > 9: ", 6 > 9);
console.log("   -> 6 >= 9: ", 6 >= 9);
console.log("   -> 6 < 9: ", 6 < 9);
console.log("   -> 6 <= 9: ", 6 <= 9);
console.log("   -> 6 !== 9: ", 6 !== 9);
console.log("   -> 6 != '6': ", 6 != "9");
console.log("   -> 6 !== '6': ", 6 !== "9");

console.log("Operadores Lógicos:");
console.log("   -> 6 > 5 && 6 > 4: ", 6 > 5 && 6 > 4);
console.log("   -> 6 > 5 || 6 > 4: ", 6 > 5 || 6 > 4);
console.log("   -> 6 > 5 && 6 < 4: ", 6 > 5 && 6 < 4);
console.log("   -> 6 > 5 || 6 < 4: ", 6 > 5 || 6 < 4);
console.log("   -> 6 > 15 || 6 < 4: ", 6 > 15 || 6 < 4);
console.log("   -> !(6 > 15 || 6 < 4): ", !(6 > 15 || 6 < 4));

console.log("Comentários:");
console.log("   -> Comentário de linha: ", "// Comentário de Linha");
console.log("   -> Comentário de bloco: ", "/* Comentários */");
