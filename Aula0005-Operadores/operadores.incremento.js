/*
Operador de incremento pós-fixado (A++)
Operador de decremento pós-fixado (A--)
Operador de incremento de prefixo (++A)
Operador de decremento de prefixo (--A)
*/

let contador = 1;
contador++; // 2 Operador de incremento pós-fixado (A++)
contador++; // 3
contador++; // 4
contador++; // 5
contador++; // 6
contador++; // 7
contador++; // 8
contador++; // 9
contador++; // 10
console.log(contador); // exibe 10

let contador2 = 1;
contador2--; // 0 Operador de decremento pós-fixado (A--)
contador2--; // -1
contador2--; // -2
contador2--; // -3
contador2--; // -4
contador2--; // -5
contador2--; // -6
contador2--; // -7
contador2--; // -8
console.log(contador2); // exibe -8

let contador3 = 1;
++contador3; // 2 Operador de incremento prefixado (++A)
++contador3; // 3
++contador3; // 4
++contador3; // 5
++contador3; // 6
++contador3; // 7
++contador3; // 8
++contador3; // 9
++contador3; // 10
console.log(contador3); // exibe 10

let contador4 = 1;
--contador4; // 0 Operador de decremento prefixado (--A)
--contador4; // -1
--contador4; // -2
--contador4; // -3
--contador4; // -4
--contador4; // -5
--contador4; // -6
--contador4; // -7
--contador4; // -8
console.log(contador4); // exibe -8