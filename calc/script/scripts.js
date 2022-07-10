window.addEventListener('load', function() {

let Calc = function() {

    let showNumb = document.querySelector('.calc__screen');
    showNumb.innerHTML = '0';
    let showNumbLength = showNumb.innerHTML.length;

    let numb1 = 0;
    let numb2 = 0;
    let result = 0;

    let addNumber = function(){

        if (showNumb.innerHTML == '0') showNumb.innerHTML = '';

        if (showNumbLength < 16) {
            return showNumb.innerHTML += this.innerHTML;
        } else {
            return;
        }
    };

    let key1 = document.querySelector('.key1');
    key1.addEventListener('click', addNumber);

    let key2 = document.querySelector('.key2');
    key2.addEventListener('click', addNumber);

    let key3 = document.querySelector('.key3');
    key3.addEventListener('click', addNumber);

    let key4 = document.querySelector('.key4');
    key4.addEventListener('click', addNumber);

    let key5 = document.querySelector('.key5');
    key5.addEventListener('click', addNumber);

    let key6 = document.querySelector('.key6');
    key6.addEventListener('click', addNumber);

    let key7 = document.querySelector('.key7');
    key7.addEventListener('click', addNumber);

    let key8 = document.querySelector('.key8');
    key8.addEventListener('click', addNumber);

    let key9 = document.querySelector('.key9');
    key9.addEventListener('click', addNumber);

    let key0 = document.querySelector('.key0');
    key0.addEventListener('click', addNumber);

    numb1 = showNumb.innerHTML;
    console.log(numb1);
    a = this.innerHTML;
    console.log(a);

    // showNumb.innerHTML = '';
    // numb2 = showNumb.innerHTML;
    // console.log(numb2);


   this.setOperation = function(){
    numb1 = showNumb.innerHTML;
    console.log(numb1);
    a = this.innerHTML;
    console.log(a);
   
    switch(true) {
        case this.innerHTML == '+':
            result = +numb1 + +numb1;
            console.log(result);
        break;
        case this.innerHTML == '-':
            result = +numb1 - +numb1;
            console.log(result);
        break;
        case this.innerHTML == '*':
            result = +numb1 * +numb1;
            console.log(result);
        break;
        case this.innerHTML == '/':
            result = +numb1 / +numb1;
            console.log(result);
        break;
        default:
            result = '0';
    }

    };
   
    let div = document.querySelector('.keyDiv');
    div.addEventListener('click', this.setOperation);
    
    let mult = document.querySelector('.keyMult');
    mult.addEventListener('click', this.setOperation);
    
    let add = document.querySelector('.keyAdd');
    add.addEventListener('click', this.setOperation);
    
    let subt = document.querySelector('.keySubt');
    subt.addEventListener('click', this.setOperation);
    

    let bntKeyResult = document.querySelector('.keyResult');
    bntKeyResult.addEventListener('click', function() { 
        return showNumb.innerHTML = result;
    });

    this.clear = function(){
        let bntClear = document.querySelector('.keyClear'); 
        bntClear.addEventListener('click', function() { 
            let showNumb = document.querySelector('.calc__screen');
            return showNumb.innerHTML = '0';
        });
    };


    if (showNumb.innerHTML) {
        return this.clear();
    } else {
        return;
    }





};

let calc = new Calc();





});



