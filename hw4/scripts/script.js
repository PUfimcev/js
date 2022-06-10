// Task 1

let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i <arr1.length; i++) {
    document.write(arr1[i] + '<br/>')
}
document.write('<br/>' + '<br/>');

// Task 2

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < -3 && arr2[i] > -10) {
    console.log(arr2[i]);
    }
}

// Task 3 

let arr3 = [],
    result = 0;

for (let i = 23; i <= 57; i++) {
    arr3.push(i);
}
console.log(arr3);

for (let i = 0; i < arr3.length; i++) {
    result += arr3[i];
}
console.log(result);

/*let i = 23;

while (i <= 57) {
    arr3.push(i);
    i++;
}
document.write(arr3)*/

// Task 4

let arr4 = ['10', '20', '30', '50', '235', '3000'],
    numFierst = '';

for (let i = 0; i < arr4.length; i++) {
    numFierst = String(arr4[i]);
    if (numFierst[0] == 1 || numFierst[0] == 2 || numFierst[0] == 5) {
        console.log(numFierst);
        document.write(numFierst + ' ');

    }
}
document.write('<br/>' + '<br/>');

// Task 5 ?

let arr5 = ['Mon', 'Tue', 'Wen', 'Thurs', 'Fri', 'Sat','San'];

    for (let i = 0; i < arr5.length; i++) {
        
        if (arr5.indexOf(arr5[i]) >= 0 && arr5.indexOf(arr5[i]) < 5) {
            document.write(arr5[i] + ' ');
        } else {
            document.write('<b>' + arr5[i] + ' <b/>');
        } 
    }
document.write('<br/>' + '<br/>');

// Task 6 

let arr6 = ['Mon', 'Tue', 'Wen', 'Thurs', 'Fri', 'Sat'];
    arr6.push('San');
    console.log(arr6.at(-1));
    // arr6[arr6.length-1] = 'San';
    // console.log(arr6[arr6.length-1]);

// Task 7 

/*let arr7 = [];

for (let i = 0;; i++) {
    let input = prompt('Введите любые числа по-очереди:');
    if (input != '') {
        arr7.push(+input);
    } else {
        break;
    }

    if (isNaN(input)) {
        alert('Введите число!');
        arr7.pop();
        continue;
    }
}

console.log(arr7);

arr7.sort((a,b) => a-b);

console.log(arr7);*/

// Task 8

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];

console.log(arr8.reverse());

let i = arr8.length-1,
str = '';
arr8 = [12, false, 'Текст', 4, 2, -5, 0];

while (i >= 0) {
    str += arr8[i] + ' ';
    i--
}
console.log(str);

// Task 9

let arr9 = [5,9,21,,,9,78,,,,6],
    count = 0;

for (let i = 0; i < arr9.length; i++) {
    if (isNaN(arr9[i])) count++;

}
console.log(count);

// Task 10

let arr10 = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2],
    sum3 = 0;
        
    for (let i = arr10.indexOf(0); i < arr10.lastIndexOf(0); i++) {
        sum3 += +arr10[i]; 
    }
    console.log(sum3);

// Task 11

let sumArr = [];

for (let i = 0; i < 5; i++) {
    let arr11 = [];
    for (let j = 0; j < 5-i; j++) {
        arr11.push(' ');
    }
    arr11 = arr11.join(' ');

    let arr12 = [];
    for (let j = 0; j < 2*i+1; j++) {
        arr12.push('^');
    }
    arr12 = arr12.join(' ');

    sumArr = arr11.concat(arr12);
    console.log(sumArr);
    document.write('<pre>' + sumArr + '</pre>')
}

    
