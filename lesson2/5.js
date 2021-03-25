/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
 */

"use strict";

let a = +prompt("Введите число a ");
let b = +prompt("Введите число b ");

function addit (a, b) {
    return a + b;
}

function substr (a, b) {
    return a - b;
}

function dev (a, b) {
    return a / b;
}

function mult (a, b) {
    return a * b;
}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addit (arg1, arg2);
        case "-":
            return substr (arg1, arg2);
        case "*":
            return mult (arg1, arg2);
        case "/":
            return dev (arg1, arg2);
        default:
            console.log(`ввели недопустимую операцию ( + - * / ): ${oper}` );
    }
}

let oper = prompt("Введите математическую операцию ( + - * / ):")

console.log(`${a} ${oper} ${b} = ` , mathOperation(a, b, oper));