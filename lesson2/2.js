/*
2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
 */

/*
переменной а в начале присовено значение 2, в результате операции присваивания в скобках - скобки имеют высший приоритет
переменная а умножится на 2 и ответ присвоится переменной а далее вычисление 1 + 4
ответ 5
 */
"use strict";
let a = 2;
let x = 1 + (a *= 2);
console.log(`ответ ${x}`);