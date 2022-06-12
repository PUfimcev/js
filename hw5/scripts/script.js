// 1 Task 

/*function result(a, b, c) {
    return console.log((a - b) / c);
}

result(10,6,7)*/

let result = (a, b, c) => console.log((a - b) / c);

result(10,6,7)

// 2 Task

/*function calc(n) {
    console.log(n**3);
    console.log(n**2);
} 

calc(3);*/

let calc2 = (n) => console.log(n**3, n**2);

calc2(5);

// 3 Task

// function findMax(a,b) {
//     if (a > b) return console.log('Маскимальное число:' + a)
//     return console.log('Маскимальное число:' + b)
// }

// function findMin(a,b) {
//     if (a < b) return console.log('Минимальное число:' + a)
//     return console.log('Минимальное число:' + b)
// }

// findMax(6,6);
// findMin(6,6);

function findNum(a,b) {
        if (a > b) {
            return console.log('Маскимальное число:' + a,'Минимальное число:' + b);
        } else if (a < b) {
            return console.log('Маскимальное число:' + b, 'Минимальное число:' + a);
        } else {
            return console.log('Числа равны.');
        }
}
    findNum(6,7);

// 4 Task

function arr1(start = 0, end = 1) {
    arr1 = [];
    if (start > end) {
        arr1.push(start);
    } else {
    for (let i = start; i < end; i++) {
        arr1.push(i);
    }
    return arr1;
    }
}

let showArr1 = function () {
    arr2 = [];
    for (let i = 0; i < arr1.length; i++) 
    arr2.push(arr1[i]);
    return console.log(arr2);
};

arr1(2,4);
showArr1();

// 5 Task 

function isEven(num) {
   if (num % 2 == 0) return true;
   return false;
}

console.log(isEven(5));

// 6 Task

function changeArr(arr) {

    let arr1 = [];
    for (let i = 0; i < arr.length; i++) 
        if (isEven(arr[i])) arr1.push(arr[i]);
    return console.log(arr1);
}
changeArr([2,4,3,5,6,7,8,86]);

// 7 Task 

function showPyramid(chr) {

    if (chr != undefined && chr != ' ') {
        for (let i = 1; i <= 9; i++) {
            pyr = '';
            for (let j = 0; j < i; j++) {
                pyr += chr;
            }
            console.log(pyr);
        }
    } else {
        for (let i = 1; i <= 9; i++) {
            pyr = '';
            for (let j = 0; j < i; j++) {
                pyr += i;
            }
            console.log(pyr);
        }
    }
}

showPyramid();

// 8 Task 

function showFig(h) {
    row = '';
    for (let i = 0; i < h; i++) {
        
        for (let j = 1; j < h - i; j++) {
            row += ' ';
        }
    
        for (let j = 0; j < 2*i + 1; j++) {
            row += '*';
        }
        console.log(row);
        row = '';
    }
}

showFig(5);

function showFigUpDown(h) {
    row = '';
    for (let i = h; i> 0; i--) {
        
        for (let j = 0; j < h - i; j++) {
            row += ' ';
        }
    
        for (let j = 2*i - 1; j > 0; j--) {
            row += '*';
        }
        console.log(row);
        row = '';
    }
}

showFigUpDown(5);
console.log('');

// 9 task Вывести массив чисел Фиббоначи

function fib(n) {
    let arrFib = [];
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;

        if (b < 1000) arrFib.push(b);
    }
    return console.log(arrFib);
}

fib(20);

console.log('');

// 10 Task 

function getNum(num) {
    num = String(num);
    sum = 0;

    for (let i = 0 ; i < num.length; i++) {
        sum += +num[i];
    }
    
    if (sum > 9) {
        num = sum;
       getNum(num);
    }
    return sum;
    
}

console.log('Конечное число: ' + getNum(987));



console.log('');

// 11 Task 

let i = 0;
function showArr11(arr) {
    console.log(arr[i]);
    i++;
    if (i < arr.length) showArr11(arr);
}

showArr11([2,4,3,5,7,8,86]);

console.log('');

// 12 Task 

/*function card() {
    firstName = prompt('Имя:'), 
    lasttName = prompt('Фамилия:'), 
    fathName = prompt('Отчество:'), 
    groupName = prompt('Номер группы'),
    row0 = '',
    row1 = `* Домашняя работа: "Функции"`;
    row2 = `* Выполнил: студент гр. ${groupName}`, 
    row3 = `* ${lasttName} ${firstName} ${fathName}`;
    let strLen1 = 0,
        strLen2 = 0,
        strLen3 = 0,
        maxStr = 0;

        for (let i = 0; i <= row1.length; i++) {
            strLen1 = i;
        }
        for (let i = 0; i <= row2.length; i++) {
            strLen2 = i;
        }
        for (let i = 0; i <= row3.length; i++) {
            strLen3 = i;
        }
        maxStr = Math.max(strLen1,strLen2,strLen3);

        for (let i = 0; i <= maxStr+1; i++) {
            row0 += '*';
        }
        
        let row4 = [];
         for (let i = 0; i < maxStr - strLen1; i++) {
            row4.push(' ');
         }

        row1 = row1.split('');
        row1 = row1.concat(row4);
        row1.push(' *');
        row1 = row1.join('');
        
        let row5 = [];
        for (let i = 0; i < maxStr - strLen2; i++) {
           row4.push(' ');
        }

       console.log(row5);

       row2 = row2.split('');
       row2 = row2.concat(row5);
       row2.push(' *');
       row2 = row2.join('');
       
       let row6 = [];
       for (let i = 0; i < maxStr - strLen3; i++) {
          row6.push(' ');
       }

      row3 = row3.split('');
      row3 = row3.concat(row6);
      row3.push(' *');
      row3 = row3.join('');
      
    console.log(row0);
    console.log(row1);
    console.log(row2);
    console.log(row3);
    console.log(row0);
}
card();*/

// 13 Task 

/*function checkMail (mail) {

    let error = false,
    for (let i = 0; i < mail.length; i++)

    if (mail[i].charCodeAt() >= 1040 && mail[i].charCodeAt() <= 1103) error = true;
    if (mail.indexOf('@') <= 2) error = true;
    if (mail.indexOf('@') != mail.lastIndexOf('@') || mail.indexOf('_') != mail.lastIndexOf('_') || mail.indexOf('-') != mail.lastIndexOf('-') || mail.indexOf('.') != mail.lastIndexOf('.')) error = true;
    if (mail.indexOf('@') == 0 || mail.indexOf('_') == 0 || mail.indexOf('-') == 0 || mail.indexOf('.') == 0) error = true;
    if (mail.at(-1) == '@' || mail.at(-1) == '_' || mail.at(-1) == '-' || mail.at(-1) == '.') error = true;

    if (mail.lastIndexOf(mail.at(-1)) - mail.indexOf('@') > 11 || mail.lastIndexOf(mail.at(-1)) - mail.indexOf('@') <= 2) error = true;    
    
  (error)?alert('Неправильно введен адрес'):alert('Правильно ввели адрес');

}
let mail = prompt('Ведите адрес эл. почты');
checkMail(mail);*/

