// leonardo tem 30 anos, pesa 84 kg e tem 1,82 metros de altura e seu imc é de 26
// leonardo nasceu no ano de 1996
// formulça do imc peso / ( altura * altura )

const nome = 'leonardo';
const sobrenome = 'rosa';
const idade = 27;
const peso = 84;
const altura = 1.82;
let imc; 
let anoNascimento;

anoNascimento = 2023 - idade
imc = peso / (altura * altura);

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg e tem ${altura} metros de altura e seu imc é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu no ano de ${anoNascimento}`);


