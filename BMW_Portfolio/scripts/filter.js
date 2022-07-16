window.addEventListener('load', function() {

const setPortfolioBtn = function () {
let setModel = document.querySelectorAll('.model');

setModel.forEach(function(element) {
    element.addEventListener('click', function() {
        
        setModel.forEach(function(element) {
            element.classList.remove('active');
        });
        
        this.classList.add('active');
    });
});
};

const filterPortfolio = function(elem) {
    let listPortfolio = document.querySelectorAll('.car__bmw');

    listPortfolio.forEach(function(item){
        if (item.classList.contains(elem)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
        setPortfolioBtn();
    });
};

let allModels =  document.querySelector('.model_all');
allModels.addEventListener('click', function() {
    filterPortfolio('all')
});

let IX3 =  document.querySelector('.model_IX3');
IX3.addEventListener('click', function() {
    filterPortfolio('IX3')
});

let BMW5 =  document.querySelector('.model_5');
BMW5.addEventListener('click', function() {
    filterPortfolio('5');
});

let BMW7 =  document.querySelector('.model_7');
BMW7.addEventListener('click',function() {
    filterPortfolio('7');
});
});