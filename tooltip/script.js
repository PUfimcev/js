// content: image, video, form

const popup = function() {
    const elems = document.querySelectorAll('[data-popup]');

    if (elems.length == 0) return;

    const getContent = function(id) {
        let html = '';

        const elem = document.querySelector(`#${id}`);

        if (!elem) return;

        html = elem.innerHTML;

        return html;
    }

    const getImageContent = function(src) {
        let html = `<img src="${src}" />`;

        return html;
    }

    const getVideoContent = function(link) {
        let id;

        id = link.split('/').pop();

        if (!id) return;

        let html = `
        <iframe src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;  

        return html;
    }

    const close = function(event) {
        if (event && 
            !event.target.classList.contains('popup') &&
            !event.target.classList.contains('popup__close')
        ) return;

        let elem = document.querySelector('.popup');
        if (elem) elem.remove();
    }

    const create = function(content) {
        close();

        const elem = document.createElement('div');
        elem.classList.add('popup');
        
        const elemWrapper = document.createElement('div');
        elemWrapper.classList.add('popup__wrapper');
        
        const btnClose = document.createElement('button');
        btnClose.classList.add('popup__close');
        btnClose.innerHTML = 'X';

        const elemContent = document.createElement('div');
        elemContent.classList.add('popup__content');
        elemContent.innerHTML = content;

        elemWrapper.append(btnClose, elemContent);
        elem.append(elemWrapper);
        

        btnClose.addEventListener('click', close);
        elem.addEventListener('click', close);

        return elem;
    }

    const show = function(e) {
        e.preventDefault();

        const type = this.dataset.popup;

        if (!type) return;

        let content = '';

        switch(type) {
            case 'content':
                const id = this.dataset.id;
                if (!id) return;

                content = getContent(id);
            break;
            case 'image':
                const src = this.href;
                if (!src) return;

                content = getImageContent(src);
            break;
            case 'video':
                const link = this.href;
                if (!link) return;

                content = getVideoContent(link);
            break;
        }

        if (!content) return;

        const modalElem = create(content);

        if (!modalElem) return;

        document.body.append(modalElem);
    }

    elems.forEach(function(elem) {
        elem.addEventListener('click', show);
    });
};

const tooltip = function(){

    const elems = document.querySelectorAll('[data-popup]');

    if (elems.length == 0) return;

    const createToolTip = function (content) {

        let elemToolTip = document.createElement('div');
        elemToolTip.classList.add('tooltip');

        let toolTipContent = document.createElement('div');
        toolTipContent.classList.add('tooltip__content');
        toolTipContent.innerHTML = content;

        elemToolTip.append(toolTipContent);
        elemToolTip.style.display="block";

      return elemToolTip;
    };

    const showToolTip = function(){

        let id = this.dataset.id

        if (!id) return;
        
        let tytle = this.getAttribute('tytle');
        
        if (!tytle) return;

        let elem = document.querySelector(`[data-id="${id}"]`);
        elem.setAttribute('tytle', '');

        let content = '';
        content = tytle;

        if (!content) return;

        let toolTip = createToolTip(content);

        if (!toolTip) return;

        document.querySelector('script').before(toolTip);

        
        let elemToolTip = document.querySelector('.tooltip');
        
        let coord = elem.getBoundingClientRect();
        console.log(coord);
        let elemHeight= elem.getBoundingClientRect().height;
        let bodyMargin = window.getComputedStyle(document.body).getPropertyValue("margin");
        bodyMargin = bodyMargin.replace(' ', '').split('px');
        bodyMargin = Math.floor(+bodyMargin[1]);

        elemToolTip.style.top = (coord.top + elemHeight + 5 + window.pageYOffset)+ "px";
        elemToolTip.style.left = (coord.left - bodyMargin + window.pageXOffset) + "px";
    };

    const hideToolTip = function(){
        let elemToolTip = document.querySelector('.tooltip');
        let content = elemToolTip.textContent;

        if (!elemToolTip) return;

        let id = this.dataset.id

        let elem = document.querySelector(`[data-id="${id}"]`);
        elem.setAttribute('tytle', `${content}`);
        
        elemToolTip.remove();
    };

    elems.forEach((elem)=>{
        elem.addEventListener('mouseover', showToolTip);
        elem.addEventListener('mouseleave', hideToolTip);
    })
};

window.addEventListener('load', function(){

    // popup();
    tooltip(); 

});
