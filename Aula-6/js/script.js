console.log("hello world!!!!!");

console.log("if/else:");
var a = 5,
  b = 6;
console.log("   -> var a = 5, b = 6;");
if (a > b) {
  console.log(`   -> ${a} é maior que ${b}`);
} else if (a < b) {
  console.log(`   -> ${a} é menor que ${b}`);
} else {
  console.log(`   -> ${a} e ${b} são iguais`);
}

console.log("switch:");
var dia = 1;
var r = "";
//prettier-ignore
switch (dia) {
  case 1: r = "Domingo"; break;
  case 2: r = "Segunda"; break;
  case 3: r = "Terça"; break;
  case 4: r = "Quarta"; break;
  case 5: r = "Quinta"; break;
  case 6: r = "Sexta"; break;
  case 7: r = "Sábado"; break;

  default: r = "Dia inválido" ; 
}
console.log("   ->", r);

console.log("Operador Ternário:");
a = 6;
b = 7;
var resposta = a > b ? "maior" : a < b ? "menor" : "igual";
console.log(`   -> a: ${a}, b: ${b}`);
console.log(
  `   -> ${a} > ${b} ? "maior" : ${a} < ${b} ? "menor" : "igual"`,
  resposta
);

console.log("while:");
var numeroAtual = 1,
  somatorio = 0;
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log("   -> resultado somatório de a 1 até 10:", somatorio);

console.log("do...while:");
var numeroAtual = 1,
  somatorio = 0;
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);
console.log("   -> resultado somatório de a 1 até 10:", somatorio);

console.log("for:");
var numeroAtual = 1,
  somatorio = 0;

for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log("   -> resultado somatório de a 1 até 10:", somatorio);

console.log("funções:");
