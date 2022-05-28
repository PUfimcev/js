
// Задание 1

let name = prompt('Как Вас зовут?'),
    age = prompt('Сколько Вам лет?'),
    city = prompt('В каком городе проживаете?'),
    phone = prompt('Какой номер Вашего телефона?'),
    email = prompt('Какой адрес Вашей электронной почты?'),
    company = prompt('В какой компании Вы работаете?');

let about = `Меня зовут ${name}. Мне ${age} лет. 
Я проживаю в городе ${city} и работаю в компании ${company}.
Мои контактные данные: ${phone}, ${email}.`; 

console.log(about);

/*let about = 'Меня зовут ' + name + '. ' + 'Мне ' + age + ' лет. ' + 'Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. ' + 'Мои контактные данные: ' + phone + ', ' + email + '.'; 
document.write(about);*/

// Задание 2

let year = 2022 - +age;

let birth = name + ' родился в ' + year + ' году.';

console.log(birth);

// Задание 3

let str = '765456',
    sum1 = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]), sum2 = parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]);

console.log((sum1 == sum2) ? 'Да': 'Нет');

// Задание 4

let a = 0;

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 5

    a = 10;
let b = 2,
    add = a + b,
    sub = a - b,
    mult = a * b,
    div = a / b,
    sum = add + sub + mult + div;

if (sum > 1) console.log(sum ** 2);

// Задание 6

if (a > 2 && a < 11) {
    console.log('Верно');
} else if (b >= 6 && b < 14) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

switch(true) {
    case a > 2 && a < 11:
    case b >= 6 && b < 14:
    console.log('Верно');
    break;
    default: 
    console.log('Неверно');
}

// Задание 7

let n = Number(prompt('Введите час времени:'));

switch(true) {
    case n >= 0 && n < 15:
        console.log('Первая четверть');
    break;
    case n >= 15 && n < 30:
        console.log('Вторая четверть');
    break;
    case n >= 30 && n < 45:
        console.log('Третья четверть');
    break;
    default: 
        console.log('Четвертая четверть');
}

// Задание 8

let day = Number(prompt('Введите день месяца:'));

switch(true) {
    case day > 0 && day <= 10:
        console.log('Первая декада');
    break;
    case day > 10 && day <= 20:
        console.log('Вторая декада');
    break;
    case day > 20 && day <= 31:
        console.log('Третья декада');
    break;
    default: 
        console.log('В месяце 31 день');
}

if (day > 0 && day <= 10) {
    console.log('Первая декада');
} else if (day > 10 && day <= 20) {
    console.log('Вторая декада')
} else if (day > 20 && day <= 31) {
    console.log('Третья декада');
} else {
    console.log('В месяце 31 день');
}

// Задание 9

let days = parseFloat(prompt('Введите количество дней:')),
    years = days / 365,
    mon = days / 31,
    weeks = days / 7,
    hours = days * 24,
    min = days * 1440,
    sec = days * 86400;
console.log('Что соcтавляет: ');

if (years >= 1) {
    console.log(years.toFixed(1) + ' лет,');
} else {
    console.log('Меньше года,');
}

if (mon >= 1) {
    console.log(mon.toFixed(1) + ' месяцев,');
} else {
    console.log('Меньше месяца,');
}

if (weeks >= 1) {
    console.log(weeks.toFixed(1) + ' недель,');
} else {
    console.log('Меньше недели,');
}

console.log(hours + ' часов,');
console.log(min + ' минут,');
console.log(sec + ' секунд.');

// Задание 10

day = Number(prompt('Введите число дней:'));

console.log('Месяц:');
switch (true) {
    case day >=0 && day <= 31:
        console.log('Январь');
    break;
    case day >=32 && day <= 59:
        console.log('Февраль');
    break;
    case day >=60 && day <= 90:
        console.log('Март');
    break;
    case day >=91 && day <= 120:
        console.log('Апрель');
    break;
    case day >=121 && day <= 151:
        console.log('Май');
    break;
    case day >=152 && day <= 181:
        console.log('Июнь');
    break;
    case day >=182 && day <= 212:
        console.log('Июль');
    break;
    case day >=213 && day <= 243:
        console.log('Август');
    break;
    case day >=244 && day <= 273:
        console.log('Сентябрь');
    break;
    case day >=274 && day <= 304:
        console.log('Октябрь');
    break;
    case day >=305 && day <= 334:
        console.log('Ноябрь');
    break;
    case day >=335 && day <= 365:
        console.log('Декабрь');
    break;
    default:
        alert('Количество дней превышает год. Введите число дней до 365', 365);
        location.reload();
    }
    

console.log('\nПора года:');
switch (true) {
    case day >=0 && day <= 59:
        console.log('Зима');
    break;
    case day >=60 && day <= 151:
        console.log('Весна');
    break;
    case day >=152 && day <= 243:
        console.log('Лето');
    break;
    case day >=244 && day <= 334:
        console.log('Осень');
    break;
    case day >=335 && day <= 365:
        console.log('Зима');
    break;
}

