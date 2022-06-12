// let sumArr = [];

// for (let i = 0; i < 5; i++) {
//     let arr11 = [];
//     for (let j = 0; j < 5-i; j++) {
//         arr11.push(' ');
//     }
//     arr11 = arr11.join(' ');

//     let arr12 = [];
//     for (let j = 0; j < 2*i+1; j++) {
//         arr12.push('^');
//     }
//     arr12 = arr12.join(' ');

//     sumArr = arr11.concat(arr12);
//     console.log(sumArr);
//     document.write('<pre>' + sumArr + '</pre>')
// }


// 1 let arr1 = [1,2,3,4,5],
//     sumArr1 = 0;

// for (let i = 0; i < arr1.length; i++) {
//     sumArr1 += arr1[i];
// }

// console.log(sumArr1);

// 2 Найти номер и значение первого найденного отрицательного элемента массива.

// let arr2 = [0, 3, 3, -4],
//     num = ''; 

// for (let i = 0; i < arr2.length; i++) {

//     if (arr2[i] < 0) num = arr2[i]
//      break;
// }

// console.log(num, arr2.indexOf(num));

// 3 Найдите максимальный и минимальный элементы массива. Выведите эти элементы и их сумму.

// let arr3 = [-1, -2, -3, -4, -235],
//     maxArr3 ,
//     minArr3 ,
//     sumArr3 = 0;

// for (let i = 0; i < arr3.length; i++) {

//     if (minArr3 == undefined || maxArr3 == undefined) {
//         maxArr3 = arr3[i];
//         minArr3 = arr3[i]
//     }

//     if (maxArr3 < arr3[i]) maxArr3 = arr3[i];
//     if (minArr3 > arr3[i]) minArr3 = arr3[i];

//     sumArr3 = maxArr3 + minArr3;
// }

// console.log(maxArr3, minArr3, sumArr3);

// 4 Создайте произвольный массив и выведите его перевернутую версию, например: [0, ‘N’, 98, ‘Text’, 3, 5] => [5, 3, ‘Text’, 98, ‘N’, 0]

// let arr4 = [0, 'N', 98, 'Text', 3, 5];

//     revArr4 = arr4.reverse();

//     console.log(revArr4);

// 6 Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку. Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].

// let arr5 = [1, -5, 0, 3, -4],

//     arr6 =[];

// for (let i = 0; i < arr5.length; i++) {

//     arr6.push(-1 * arr5[i]);
// }

//     console.log(arr6);

// 7 Поменяйте местами максимальный и минимальных элементы в массиве.

let arr5 = [10, -2, -3, -4, -1],
    maxArr5 = arr5[0],
    minArr5 = arr5[0];

for (let i = 0; i < arr5.length; i++) {

    if (maxArr5 < arr5[i]) maxArr5 = arr5[i];
    if (minArr5 > arr5[i]) minArr5 = arr5[i];

}
    // arr5[arr5.indexOf(maxArr5)] = minArr5;
    // arr5[arr5.lastIndexOf(minArr5)] = maxArr5;

    arr5.splice(arr5.indexOf(maxArr5), 1, minArr5);
    arr5.splice(arr5.lastIndexOf(minArr5), 1, maxArr5);

console.log(arr5);
console.log(maxArr5,  minArr5);

// 8.	Посчитайте кол-во отрицательных, положительных элементов, а также  элементов со строчным типом данных.

let arr8 = [0, 10, 1,2,-3,-1, -5, 't', 's', '3s'],
    countPos = 0,
    countNeg = 0,
    countStr = 0;

for (let i = 0; i < arr8.length; i++) {

    if (arr8[i] >= 0) {
        countPos++
    } else if (arr8[i] < 0) {
        countNeg++
    } else if (!isFinite(arr8[i])) {
        countStr++
    }
}

console.log('Положительных чисел:' + countPos);
console.log('Отрицательных чисел:' + countNeg);
console.log('Строчные значения:' + countStr);


// 9 Дан массив целых чисел. Проверить, есть ли в нем одинаковые элементы. Вывести в консоль: “Есть повторки!”, “Нет повторок”

/*let arr9 = [0, 2, 3, 4, 5, 6, 7 ,8 ,9 ,1],
    dub = false;

for (let i = 0; i < arr9.length; i++) {

        // if (arr9.indexOf(arr9[i]) != arr9.lastIndexOf(arr9[i])) dub = true;

        if (i != arr9.lastIndexOf(arr9[i])) dub = true;
    }

if (dub) {
    console.log('Есть повторения');
} else {
    console.log('Нет повторений');
}*/

let arr91 = [0, 2, 3, 4, 5, 6, 7 ,8 ,9 ,0],
    dub1 = false;

for (let i = 0; i < arr91.length; i++) {
    
    for (let j = i + 1; j < arr91.length; j++) {
    
        if (arr91[i] == arr91[j])  dub1 = true;
    }
}

if (dub1) {
    console.log('Есть повторения');
} else {
    console.log('Нет повторений');
}

// 10.	Выполните сортировку массива с разными числовыми элементами.

let arr10 = [3,5,12,23,45,67,87,65,3,1,9,0];

arr10.sort((a,b) => a-b);

console.log(arr10);

// 11.	Создайте массив из пяти имен и выведите их на экран те из них, которые начинаются с определенной буквы, которая вводится с клавиатуры.


/*let arr11 = ['Павел','Таня','Мия','Иван','Петр'],
    letter = prompt('Введите букву'),
    name1 = '',
    newArr11 = [];

for (let i = 0; i < arr11.length; i++) {
    name1 = arr11[i];
    if (name1[0] == letter || name1[0].toLowerCase() == letter) newArr11 += arr11[i] + ' ';
}
alert(newArr11);*/



// 12.	Если в одномерном массиве имеются три подряд идущих одинаковых элемента, то переменной r присвоить значение истина.

let arr12 = [1,1,1,2,2,3,3,4,4],
    r;

for (let i = 0; i < arr12.length; i++) {
    if (i + 2 == arr12.lastIndexOf(arr12[i]))  r = true;
}
console.log(r);

// 13.	Заданы два массива. Один содержит наименование услуг, а другой – расценки за эти услуги. Удалите из обоих массивов все элементы, которые по цене равняются n  рублей.

let arrServ = ['Уборка','Стирка','Мойка','Готовка'],
    arrCost = ['5','10','5', '1'],
    price = 10;

for (let i = 0; i <  arrServ.length; i++) {
    if (arrCost[i] == price) arrCost.splice(arrCost.indexOf(arrCost[i]), 1),
    arrServ.splice(arrCost.indexOf(arrCost[i]), 1);
}
    
    console.log(arrCost);
    console.log(arrServ);
