// faça os valores das variaveis varA,varB,varC seja trocados entre elas

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC); // B C A 