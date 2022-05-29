// Задание 1

/*for (let i = 1; i <= 50; i++) {
    console.log(i)
}


let i = 35;
while ( i >= 8) {
    console.log(i)
    i--;
}*/

// Задание 2

/*i = 89;
while ( i >= 11) {
    document.write(i + '<br/>');
    i--;
}*/

// Задание 3

/*let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum);*/

// Задание 4

/*let a = 5;
    sum = 0;
for (let i = 1; i <= a; i++) {

    let sum1 = 0;
    for (let j = 1; j <= i; j++) {
        sum1 += j;
    }
    console.log(sum1);

    sum += sum1
}
console.log('Общая сумма - ' + sum);*/

// Задание 5

/*for (let i = 8; i <= 56; i++) {
    if (i % 2 == 0) console.log(i);
}

i = 8;

while (i <= 56) {
    if (i % 2 == 0) console.log(i);
    i++
}*/

// Задание 6

/*for (let i = 2; i <= 10; i++) {
    let e2 = 0;
    for (let i2 = 1; i2 <=10; i2++) {
        e2 = i * i2
        document.write(i + ' * ' + i2 + ' = ' + e2 + '<br/>')
    }
}*/

// Задание 7

/*let n = 1000,
    p = 0;

for (let i = 1; n >50; i++) {
    n /=2;
    p = i;
}
console.log(n, 'Количество итераций -' + p);*/

// Задание 8

/*let sum1 = 0,
    sum2 = 0;
    
label: for (let i = 0;; i++) {
    let answ = prompt('Введите любые числа');
    if (isFinite(answ)) {
        sum1 += Number(answ);
        sum2 = sum1 / i;
        if (answ == 0 || answ == '') break;
        continue label;
    } else {
        alert('Ошибка! Введите число.');
    }
}

console.log('Сумма введенных чисел - ' + sum1);
console.log('Среднеарифметическое введенных чисел - ' + sum2);*/




// Задание 9

/*let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 10 1 36 8 57',
    gap = '',
    max = 0,
    min = str[0];

for (let i = 0; i <=str.length-1; i++) {

    if (str[i] != ' ') {
        gap += str[i];
    } else {
        // console.log(gap);
        gap = '';
    }
    if (gap.length > 0) {
        if (max < +gap) {
            max = +gap;
        } else if (min > +gap){
            min = +gap;
        }
    }

}
console.log(min);
console.log(max);*/

// Задание 10

let num = prompt('Введите целое число'),
    strNum = '',
    rev = '',
    iter = 0,
    sumN = 0;




for (let i = 0; i <= num.length-1; i++) {
    iter = i + 1;
    strNum += num[i] + '\n';
    sumN += Number(num[i]);
    rev += num[(num.length-1) - i] + ' ';
    console.log(num[i]);
}

console.log(strNum);
console.log('Цифр в числе - ' + iter);
console.log('Сумма чисел равняется - ' + sumN);
console.log(rev);











