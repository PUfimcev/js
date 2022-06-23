// 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены.

let str1 = 'aaa@bbb@ccc';

const changeStr = function(str) {
    let strNew = str.replace(/@/g, '!');
    return strNew;
}

console.log(changeStr(str1));


// 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025.

let date = '2025-12-31';

const changeDate = function(date) {
    return date.split('-').reverse().join('/');
}

console.log(changeDate(date));

// 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice).

let str3 = 'Я учу javascript!';

let str3_substr = str3.substr(str3.indexOf('учу'), 3);
let str3_substring = str3.substring(str3.indexOf('учу'), 5);
let str3_slice = str3.slice(str3.indexOf('учу'), 5);

console.log(str3_substr);
console.log(str3_substring);
console.log(str3_slice);

str3_substr = str3.substr(str3.indexOf('javascript'), 10);
str3_substring = str3.substring(str3.indexOf('javascript'), 16);
str3_slice = str3.slice(str3.indexOf('javascript'), 16);

console.log(str3_substr);
console.log(str3_substring);
console.log(str3_slice);

// 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr4 = [4, 2, 5, 19, 13, 0, 10];

const sumRoot = function(arr) {
    const arrCubic = arr.map((item) => Math.pow(item, 3));

    const arrSum = Math.pow((arrCubic.reduce((result,current) => result + current)), 1/2);

    return arrSum.toFixed(2);
} 

console.log(sumRoot(arr4));


let arr5 = [4, 2, 5, 19, 13, 0, 10];

const sumRoot1 = function(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]**3;
    }
     
    return Math.pow(sum, 1/2);
 
} 

console.log(sumRoot1(arr5));

// 5. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

const valueC = function (a, b) {
    let c = Math.abs(a - b);
    return c;
}

console.log(valueC(6 ,1));

// 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014).

const dateNow2 = function(dateNow) {

return dateNow.toLocaleString('ru').split(',').reverse().join(' ');

}

console.log(dateNow2(new Date(2009, 8, 1)));

// 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'.

let str7 = 'aa aba abba abbba abca abea';

console.log(str7.match(/ab+a/g));

// 8. Напишите ф-цию строгой проверки ввода номер телефона в международном формате (<код страны> <код города или сети> <номер телефона>). Функция должна возвращать true или false. Используйте регулярные выражения.

let numbPhone = '+375 (29) 166-45-45';

const validateNumber = function(number) {
let regExp  = /^\+375\s?\(?(17|29|33|44|25)\)?\s?[1-9]\d{2}[-\s]?\d{2}[-\s]?\d{2}/gm;

return regExp.test(number);

}

console.log(validateNumber(numbPhone)) 

// 9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условия: 
// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.

// Курс «JS».

// Функция должна возвращать true или false. Используйте регулярные
// выражения.



let email = 'PUfimcev@rn-west.ru';

const validateEmail = function(email) {
let regExp  = /^\D[a-zA-Z0-9_-]{2,}@[\w-]{2,11}\.[\w]{2,11}$/gi;

return regExp.test(email);

}

console.log(validateEmail(email));

// 10. Напишите ф-цию, которая из полного адреса с параметрами и без,
// например: https://tech.onliner.by/2018/04/26/smart-do-200/?
// utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
// доменного имени (https://tech.onliner.by), остальную часть адреса без
// параметров (/2018/04/26/smart-do-200/), параметры
// (utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
// может и не быть каких-либо составляющих. Ф-ция должна возвращать
// массив.


const separAdr = function(adr){
    
    let adrName = 'https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3'; 
    let domane = adrName.match(/[\w\/.:_-]+\.\w{2,11}/g);
    let path = adrName.match(/\/[-\/\w]+\//g);
    let param = adrName.match(/\?[\w=&]+/g);
    let hash = adrName.match(/\#\w+/g);

    let  separAdr = domane.concat(path,param,hash);

    separAdr = separAdr.filter((item) => item !== null);

    adr(separAdr);
}

separAdr(console.log);
