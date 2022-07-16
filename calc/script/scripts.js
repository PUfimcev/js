window.addEventListener('load', function() {

let Calc = function() {

    let showNumb = document.querySelector('.calc__screen');
    showNumb.innerHTML = '';
    let showNumbLength = showNumb.innerHTML.length;

    let numb1 = null;
    let numb2 = null;
    let result = 0;

    let addNumber = function(){

        // if (showNumb.innerHTML == '0') showNumb.innerHTML = '';

        if (showNumbLength < 16) {
            return showNumb.innerHTML += this.innerHTML;
        } else {
            return;
        }
    };

    // Получение цифры

    const number = function () {
        let exp = document.querySelectorAll('.keys_figers');
        exp.forEach(element => {
            element.addEventListener('click', addNumber);
        });
    };

    number();

    // Десятичная дробь
    
    const dec = function () {
        let dec = document.querySelector('.dec');
        dec.addEventListener('click', function() {
            if (showNumb.innerHTML.indexOf('.') != -1) { return false;
            } else {
                return showNumb.innerHTML += this.innerHTML;
            }
        });
    };

    dec();

    // Клавиша удаления

    const del = function () {
        let del = document.querySelector('.keyDel');
        del.addEventListener('click', function() {
            showNumb.innerHTML = showNumb.innerHTML.slice(0, showNumbLength - 1);
            return showNumb.innerHTML;
        });
    };

    del();

    // Противоположное занчение

    const oppose = function () {
        let neg = document.querySelector('.keyNeg');
        neg.addEventListener('click', function() {
            showNumb.innerHTML = +showNumb.innerHTML * -1;
            return showNumb.innerHTML;
        });
    };

    oppose();

    // Процент числа

    const percent = function () {
        let per = document.querySelector('.keyPerc');
        per.addEventListener('click', function() {
            showNumb.innerHTML = +showNumb.innerHTML / 100;
            return showNumb.innerHTML;
        });
    };

    percent();

    // Проведение вычисления

   const setOperation = function(){

    if (numb1 === null) {
        numb1 = showNumb.innerHTML;
        oper = this.innerHTML;
        showNumb.innerHTML = '';
        return;
    }
    
    if (numb1 !== null && numb2 === null) {
        numb2 = showNumb.innerHTML;
    }

    switch(true) {
        case oper == '+':
            result = +numb1 + +numb2;
        break;
        case oper == '-':
            result = +numb1 - +numb2;
        break;
        case oper == '*':
            result = +numb1 * +numb2;
        break;
        case oper == '/':
            result = +numb1 / +numb2;
        break;
    }
    return;
    };

    const operation = function () {
        let exp = document.querySelectorAll('.keys_exp');
        exp.forEach(element => {
            element.addEventListener('click', setOperation);
        });
    };

    operation();

    // Показать результат

    const showResult = function() {
    let bntKeyResult = document.querySelector('.keyResult');
    bntKeyResult.addEventListener('click', function () { 
        setOperation();
        return  showNumb.innerHTML = result;
    });
    };

    showResult();

    // Очистить поле

    const clear = function(){
        let bntClear = document.querySelector('.keyClear'); 
        bntClear.addEventListener('click', function() { 
            location.reload();
        });
    };

    clear();
};

let calc = new Calc();

});



