/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
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

console.log(`Сумма двух чисел = ${addit(a,b)}`);
console.log(`Разность двух чисел = ${substr(a,b)}`);
console.log(`Произведение двух чисел = ${mult(a,b)}`);
console.log(`Деление двух чисел = ${dev(a,b)}`);