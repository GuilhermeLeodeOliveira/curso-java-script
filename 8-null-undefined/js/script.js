// Hoisting - içamento

/*
Hoisting faz com que as funções e variáveis sejam 
inicializadas no topo do código
*/ 
console.log(sobrenome);
console.log(numero);

var nome = null;
var sobrenome = "Leo";

console.log(nome);
console.log(sobrenome);

nome = "Guii";

console.log(nome);

var numero = 5;