window.addEventListener('load', function() {
        
    const newTask = function(){

        let getTask = document.querySelector('.list__getTask');

        let listTasks = document.querySelector('.list__tasks');

        let length = listTasks.children.length;

        let li = document.createElement('li');

        let task = document.createElement('span');
        task.classList.add('text_task');
        task.innerHTML = getTask.value;

        let  delTask = document.createElement('span');
        delTask.classList.add('del_task');
        delTask.innerHTML = '\u00D7'

        li.append(task,delTask);
        
        if (getTask.value != '') {
            listTasks.append(li);
            li.addEventListener('dblclick', editTask);
            li.addEventListener('click', function(){
                this.classList.toggle('checked');
            });
            getTask.value = '';
            
        } else {
            return;
        };

        delTask.addEventListener('click', function() {
            let bntDel = document.querySelector('.bnt__delete');
            let length = listTasks.children.length;
            li.remove();
            if (length == 1) {
                bntDel.remove();
            }
        })

        length = listTasks.children.length;

        if (length == 1) {
            bntDel();
        };
    };

    let getTask = document.querySelector('.list__getTask');
    getTask.addEventListener('click',newTask);
    getTask.addEventListener('change',newTask);

    const editTask = function() {
        let li = this;
        let task =  li.querySelector('span');
        let newTask = prompt('Изменить задачу:', task.innerHTML);
        if (!newTask || newTask.length == 0) return;
        task.innerHTML = newTask; 
    }

    const bntDel = function () {
    let listTasks = document.querySelector('.list__tasks');
    let bntDel  = document.createElement('button');
    bntDel.innerHTML = 'Delete list';
    bntDel.classList.add('bnt__delete');
    listTasks.after(bntDel);

    bntDel.addEventListener('click', function() {
        listTasks.innerHTML = '';
        this.remove();
    });
    };

});
