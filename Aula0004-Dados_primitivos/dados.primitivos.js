/*
Dados primitivos

No JavaScript, existem 6 tipos primitivos:

String = 'leo', "leo", `leo`
Number = 12
Boolean = true, false
Null = Não aponta para lugar nenhum da memória mas ele é diferente de undefined 
undefined = Não aponta para lugar nenhum da memoria
Symbol = Novo no ECMAScript 6

*/

const nome = 'Luiz'; // string
const nome1 = 'Luiz'; // string
const nome2 = 'Luiz'; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta pra local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta pra local nenhuma na memória
const aprovado = false; // Boolean = true, false (lógico)


let a = 2;
const b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // 3, 2