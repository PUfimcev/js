// Exercise 1

function powersOfTwo(n){
    let arr = [],
        num = 1;
        
        for (let i = 0; i <= n; i++) {
          if (i == 0) { 
              arr.push(1);
          } else {
           num *= 2;
           arr.push(num);
        }
        }
      return arr;
  }
  

console.log(powersOfTwo(3));

// Exercise 2

// function powersOfTwo(n){
//     let arr = [],
//         num = 0;
//         for (let i = 0; i <= n; i++) {
//         num = 2**i;
    
//         arr.push(num);
//     }
//       return arr;
//   }
  

// console.log(powersOfTwo(1));

// Exercise 3

// function oddCount(n){
//   let arr = [];
//       for (let i = 0; i < n; i++) {
//         if (i % 2 == 1) arr.push(i);
//       }
//   return arr.length;
// }

// console.log(oddCount(7));


// Exercise 4

// function squareSum(numbers){
//   let sum = 0;
  
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]**2;
//   }
//   return sum;
// }

// console.log(squareSum([1, 2, 2]));


// Exercise 5

// for input:                5, true, false
// expected result would be: [true, false, true, false, true]

// const arr = function(n, firstValue, secondValue) {
//       let arr = [];
//       for (let i = 0; i < n; i++) {
//         if (i % 2 == 0) arr.push(firstValue);
//         else arr.push(secondValue);
//       }
//       return arr;
// }

// console.log(arr(7, true, false))


// Exercise 6

// each_cons([1,2,3,4], 2)
//   #=> [[1,2], [2,3], [3,4]]

// each_cons([1,2,3,4], 3)
//   #=> [[1,2,3],[2,3,4]]


// const each_cons2 = function(arr, n) {
//   let arr1 = [];
// if (n%2 == 0) {
// for (let i = 0; i < arr.length-1; i++) {
//    arr1.push(arr.slice(i,i+n));
// }
// } else if (n == 1) {
//   for (let i = 0; i < arr.length; i++) {
//     arr1.push(arr.slice(i, i+n));
//  }
// }

// else if (n%2 == 1) {
//   for (let i = 0; i < arr.length-2; i++) {
//     arr1.push(arr.slice(i,i+n));
//  }
// } else {
//   arr1 = [];
// }
//   return arr1;
// }

// console.log(each_cons2([1,2,3,4], 3));


// Exercise 7

// 16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6

// const sumNum = function (num) {
//     let sum = 0;
//       num = String(num);

//       for (let i = 0; i < num.length; i++) {
//         sum += +num[i];
//       }

//       if (String(sum).length > 1) {
//         sumNum(sum);
//         return;
//       } else {
//       console.log(sum);
//       }

// }
// sumNum(0);
// console.log(sumNum(165));


// Exercise 8

// function lovefunc(flower1, flower2){
//   let sum = flower1 + flower2;
//    if (sum % 2 == 1) return true;
//     else return false;
// }

// console.log(lovefunc(0, 1));

// Exercise 9

// Example (if i is 25):

// Multiples of 25 up to 100 --> [25, 50, 75, 100]

// Digit sum of each multiple --> [7, 5, 12, 1]

// Sum of each new digit sum --> 25



const numb = function (num) {
let arrNumb = [];

for (let i = 1; i <= 100; i++) {
    if (i % num == 0) arrNumb.push(i)
}

console.log(arrNumb);

let arr2 = [];
arrNumb.forEach(function(item) {
  item = String(item).split('');
  let sum = 0;
    item.map(function(item) {
      sum += +item;
    })
    arr2.push(sum); 
})
console.log(arr2);

let sum = 0;
let arr3 = [];
arr2.map(function(item){
  sum += +item;
})
arr3.push(sum);

console.log(arr3.join());

}

numb(10);


// 4. Напишите функцию findLongestWord(str), которая принимает строку в качестве параметра и находит самое длинное слово в строке.

const  findLongestWord = function(str) {
    let words = str.split(' ');
    let maxLength = words[0].length;
    let wordLong = '';

    // console.log(words);

    words.forEach(function(item) {
      if (maxLength <= item.length) {
        maxLength = item.length;
      wordLong = item;
      }
    });
  
    let arr2 = [];
    words.filter(function(item) {
      if (item.length >= 13) {
        arr2.push(item);
      }
      return arr2;
      
    });
    
    console.log(arr2.join(' '));
  }
  
findLongestWord('Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую  коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.');

// 1. Напишите функцию, которая переворачивает число, например: 5675 => 5765.

const revNumb = function(numb) {
    numb = String(numb).split('').reverse().join('');
    return  console.log(numb);
}

revNumb(5675);


// 2. Напишите функцию, которая проверяет, является ли переданная строка палиндромом.

const matchStr = function(str) {

    str = str.toLowerCase().split(' ').join('');
    if (str == str.split('').reverse().join('')) return true;
     else return false;
}

console.log(matchStr ('Лидер бредил'));

// 3. Напишите функцию alphabetOrder(str), которая возвращает переданную строку с буквами в алфавитном порядке. Пример строки: 'alphabetical'. Ожидаемый результат: 'aaabcehillpt'. Предположим, что символы пунктуации и цифры не включены в переданную строку.

const alphabetOrder = function(str) {
  str = str.split('').sort().join('');
  return str;
}

console.log(alphabetOrder('aalphabeticale'));

// 5. Напишите функцию, которая возвращает элементы массива, которые больше указанного числа. Нельзя использовать циклы for или while.

let arr5 = [1, 3, 10, 15, 5, 67, 89];

const newArr5 = function(num) {
  let a = arr5.filter((item) => {
    return item > num; 
});
  return a;
};

console.log(newArr5(10));

// 6. Дан массив [1, 2, 3, 4, 5]. Написать рекурсивную функцию, которая выводит элементы массива в обратном порядке.

let arr6 = [1, 2, 3, 4, 5];

const arr6Rev = function(arr, i = arr.length-1) {
  if (arr[i] == undefined) return;
  console.log(arr[i]);
  i--;
    return arr6Rev(arr,i);  
} 

arr6Rev(arr6);

// 7. Есть массив arr = [0, true, false, true, 1, true, true, false, "true", undefined, "1", null]. Необходимо написать функцию, которая вернет количество true (boolean) элементов.

let arr7 = [0, true, false, true, 1, true, true, false, "true", undefined, "1", null];

const getQuant = function(arr) {
  let count = 0;
  arr.forEach((item) => {
  if (typeof item === 'boolean') {
    return count++;
  }
});
  return count;

}
console.log(getQuant(arr7));

// 8. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

const checkAnag = function (str1, str2) {
    str1 = str1.toLowerCase().replace(/[, ]/g, '');
    str2 = str2.toLowerCase().replace(/[, ]/g, '');
    console.log(str1);

    if (str1.length == str2.length && str1.split('').sort().join('') == str2.split('').sort().join('')) {
      return 'Это анаграммы';
    } else {
      return 'Это не анаграммы';
    }
}

console.log(checkAnag('слово','волос'));

// 9. Напишите функцию createArr(), которая создает массив, заполняемый "руками" (например, через prompt()), пока пользователь не введет пустую строку. Функция должна вернуть созданный массив.

/*const createArr = function (item) {
  let arr = [];

  for (let i = 0;; i++) {
    let query = prompt('Введите значения');
    if (query == '') {
      break; 
    } else {
      arr.push(query);
    }
  }
  item(arr);
}
createArr(console.log);*/


// 11. Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным значением или нет. Функция первым параметром должна принимать значение элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false. Нельзя пользоваться методами indexOf (или lastIndexOf), циклами for или while.

const inArray = function(item, arr) {
 console.log(arr.includes(item));
}

inArray('k',[1,2,4,5,7, 'k']);

/*12. Перепишите код, заменив цикл for на метод map: let arr = ["Есть", "жизнь", "на", "Марсе"]; 

const arrLength = [];
for (let i = 0; i < arr.length; i++) {
	arrLength.push(arr[i].length);
}

console.log(arrLength); // 4,5,2,5*/

let arr12 = ["Есть", "жизнь", "на", "Марсе"]; 

const arrLength = arr12.map((item) => item.length); 

console.log(arrLength); 

// 13. Есть 2 массива: arr1 = [1,2,3,4,5,6,7,8] и arr2 = [5, 3, 6, 9, 11]. Напишите функцию, которая принимает 2 массива и возвращает массив элементов, которые есть в обоих массивах. Решите задачу задачу двумя способами: используя оператор расширения; используя цикл.

let arr13_1 = [1,2,3,4,5,6,7,8],
    arr13_2 = [5, 3, 6, 9, 11];
    
const newArr = function(arr1, arr2) {
  let arr13_3 = [...arr1, ...arr2];
  return console.log(arr13_3);
}

newArr(arr13_1, arr13_2);


const newArr2 = function(arr1, arr2) {

  let a = [];
  if (arr1.length > arr2.length) {
    for (let i = 0; i < arr2.length; i++) {
       arr1.push(arr2[i]);
    }
   a = arr1;
   } else {
      for (let i = 0; i < arr1.length; i++) {
        arr2.push(arr1[i]);
  }
   a = arr2;
}

return console.log(a);
 }



newArr2(arr13_1, arr13_2);

// 14. Напишите функцию copyArr(arr), которая копирует массив не изменяя оригинал. Скопируйте массив vegetables в новый, и добавьте в него любой элемент.

// const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

// Решите задачу задачу двумя способами: используя оператор расширения; используя цикл.


const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];

const copyArr = function(arr, ...item) {
  let vegetables2 = [...arr];
  if (item[0] != undefined) {
      vegetables2.push(item[0]);
  }

  return console.log(vegetables2);
}

copyArr(vegetables, 'Картофель')

const copyArr2 = function(arr, ...item) {
  let vegetables2 = [];
  for (let i = 0; i < arr.length; i++) {
    vegetables2.push(arr[i]);
  }

  if (item[0] != undefined) {
      vegetables2.push(item[0]);
  }

  return console.log(vegetables2);
}

copyArr(vegetables, 'Картофель')

