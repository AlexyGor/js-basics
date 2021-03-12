/*
2 Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать
значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").
 */

"use strict";

let name = prompt("Введите Ваше имя ");
let admin = name;
console.log("Вы ввели имя " + admin);