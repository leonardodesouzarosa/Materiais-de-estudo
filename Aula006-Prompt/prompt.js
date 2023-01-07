// Prompt() método exibe uma caixa de diálogo que solicita uma entrada do usuário.

let num1 = prompt('Digite o primeiro numero: ');
let num2 = prompt('Digite o segundo numero: ');

num1 = Number(num1);
num2 = Number(num2);

alert(`O resultado foi: ${num1 + num2}`);