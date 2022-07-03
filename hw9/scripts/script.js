window.addEventListener('load', function() {

    console.log(document.querySelector('body'));

    let style = document.createElement('style');
        style.innerHTML = `
        * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        }

        html, body {
            height: 100vp;
            font-family: Arial;
            text-align: center;
            display: flex;
            justify-content: center;
        }

        .list {
            width: 300px;
            background-color: #ccc;
            margin-top: 100px;
            border-radius: 2px;
            overflow: hidden;
            box-shadow: 0 0 15px 2px #a79fa6;
        }

        .list__header {
            font-size: 24px;
            letter-spacing: 1px;
            background-color: #47cf12;
            padding: 10px 0;
        }

        .form__getTask {
            width: 95%;
            height: 40px;
            padding-left: 5px;
            margin: 5px auto;
            outline: none;
        }

        .form__getTask::placeholder {
            font-size: 16px;
            font-style: italic;
            padding-left: 15px;
        }

        .form__checkbox {
            background-color: #47cf12;

        }

        li {
            display: flex;
            justify-content: flex-start;
            padding: 20px 0;
            padding-left: 20px;
            border-top: 1px solid #000;
        }
        
        li:last-child {
            border-bottom: 1px solid #000;
        }
        .label {
            flex: 2;
            padding-left: 35px;
            text-align: left;
        }
        
        .text_task {
            text-transform: uppercase;
            font-weight: bold;
        }

        #checkbox:checked + label {
            text-decoration: line-through;
            color: red;
        }

        .bnt__reset {
            background-color: #FBC52B;
            text-transform: uppercase;
            font-weight: bold;
            padding: 5px 10px;
            margin: 10px auto;
            border: #FBC52B;
            border-radius: 5px;
            cursor: pointer;
        }`;

        document.head.appendChild(style);
        

    let list = document.createElement('div');
        list.classList.add('list');
        document.body.insertBefore(list, document.querySelector('script'));

    let header = document.createElement('h3');
        header.innerHTML = 'ToDoList';
        header.classList.add('list__header');
        list.appendChild(header);
        
    let getTask = document.createElement('input');
        getTask.setAttribute('type', 'text');
        getTask.classList.add('form__getTask');
        getTask.setAttribute('name', 'get');
        getTask.setAttribute('placeholder', 'Type your task...');
        list.appendChild(getTask);
        
    let task = document.createElement('ul');
        task.classList.add('form__task');
        list.appendChild(task);
        
    const newTask = function(){
        let li = document.createElement('li');
        let span = document.createElement('span');
            span.classList.add('text_task');
            span.innerHTML = document.querySelector('.form__getTask').value;
        let check = document.createElement('input');
            check.setAttribute('type', 'checkbox');
            check.setAttribute('id', 'checkbox');
        let label = document.createElement('label');
            label.setAttribute('for', 'checkbox');
            label.classList.add('label');

            li.appendChild(check);
            li.appendChild(label);
            label.appendChild(span);

            if (document.querySelector('.form__getTask').value) {
                return task.appendChild(li);
            } else {
                return;
            }
      
    };
    
    getTask.addEventListener('click',newTask);
    getTask.addEventListener('change',newTask);
        

    /* Кнопка удаления списка  */

    let bntReset  = document.createElement('button');
        bntReset.innerHTML = 'Reset list';
        bntReset.classList.add('bnt__reset');
        list.insertBefore(bntReset, task);

        bntReset.addEventListener('click', function() {
        li = task.querySelectorAll('li');
        li.forEach(function(elem){
            elem.style.display = "none";
        });
    });

    /*  Поскольку не смог получить псевдомассив Li попытался реализовать корректировку задач таким образом -- как пример  */

    let correctTask = document.querySelector('.list__header');
    correctTask.addEventListener('dblclick', function(){
                let a = prompt('Введите изменения назавания:');
                this.innerHTML = a;
    });
    
});
