window.addEventListener('load', function(){

let lang = document.querySelector('html:first-child');
    lang.setAttribute('lang', 'en');
    console.log(lang);
    
let metaUTF = document.createElement('meta');
    metaUTF.setAttribute('charset', 'UTF-8');
    document.head.insertBefore(metaUTF, document.querySelector('script'));

let metaViewport = document.createElement('meta');
    metaViewport.setAttribute('name', 'viewport');
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
    document.head.insertBefore(metaViewport, document.querySelector('script'));

let metaAuthor = document.createElement('meta');
    metaAuthor.setAttribute('name', 'author');
    metaAuthor.setAttribute('content', 'Pavel');
    document.head.insertBefore(metaAuthor, document.querySelector('script'));

let title = document.createElement('title');
    title.innerHTML = 'Call to action';
    document.head.insertBefore(title, document.querySelector('script'));

let h1 = document.createElement('h1');
    h1.innerHTML = 'Choose your option';
    h1.classList.add('header');
    document.body.appendChild(h1);

let p1 = document.createElement('p');
    p1.classList.add('header__text');
    p1.innerHTML = 'But I mast explain to you how all this mistaken idea of denouncing';
    document.body.appendChild(p1);

let divAd = document.createElement('div');
    divAd.classList.add('header__adContainer');
    document.body.appendChild(divAd);

/*  The first advertising  */

let divAd1 = document.createElement('div');
    divAd1.classList.add('adContainer');
    divAd1.classList.add('ad1');
    divAd.appendChild(divAd1);

let pAd1Top = document.createElement('p');
    pAd1Top.classList.add('ad_option');
    pAd1Top.classList.add('item1');
    pAd1Top.innerHTML = 'Freelancer';
    divAd1.appendChild(pAd1Top);

let h2Ad1 = document.createElement('h2');
    h2Ad1.classList.add('ad_header');
    h2Ad1.classList.add('header1');
    h2Ad1.innerHTML = 'Inishially designed to';
    divAd1.appendChild(h2Ad1);

let pAd1 = document.createElement('h2');
    pAd1.classList.add('ad_descr');
    pAd1.classList.add('descr1');
    pAd1.innerHTML = 'But I mast explain to you how all this mistaken idea of denouncing';
    divAd1.appendChild(pAd1);

let bntAd1 = document.createElement('button');
    bntAd1.classList.add('ad_bnt');
    bntAd1.classList.add('bnt_left');
    bntAd1.innerHTML = 'Start here';
    divAd1.appendChild(bntAd1);


/*  The second advertising  */

let divAd2 = document.createElement('div');
    divAd2.classList.add('adContainer');
    divAd2.classList.add('ad2');
    divAd.appendChild(divAd2);

let pAd2Top = document.createElement('p');
    pAd2Top.classList.add('ad_option');
    pAd2Top.classList.add('item2');
    pAd2Top.innerHTML = 'Studio';
    divAd2.appendChild(pAd2Top);

let h2Ad2 = document.createElement('h2');
    h2Ad2.classList.add('ad_header');
    h2Ad2.classList.add('header2');
    h2Ad2.innerHTML = 'Inishially designed to';
    divAd2.appendChild(h2Ad2);

let pAd2 = document.createElement('h2');
    pAd2.classList.add('ad_descr');
    pAd2.classList.add('descr2');
    pAd2.innerHTML = 'But I mast explain to you how all this mistaken idea of denouncing';
    divAd2.appendChild(pAd2);

let bntAd2 = document.createElement('button');
    bntAd2.classList.add('ad_bnt');
    bntAd2.classList.add('bnt_right');
    bntAd2.innerHTML = 'Start here';
    divAd2.appendChild(bntAd2);

/*  CSS-styling  */

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
        }

        .header {
            font-weight: lighter;
            font-size: 40px;
            letter-spacing: 2px;
            text-transform: capitalize;
            margin-top: 60px;
            margin-bottom: 30px;
        }

        .header__text {
            color: #ccc;
            margin-bottom: 60px;
        }

        .header__adContainer{
            display: flex;
            justify-content: center;
            width: 60%;
            margin: 0 auto;
        }

        .adContainer {
            padding: 80px 50px;
        }

        .adContainer:hover {
            background-color: #a777c7;
        }
        .adContainer:hover .ad_header {
            color: #fff;
        }

        .adContainer:hover .ad_option {
            color: #FBC52B;
        }

        .adContainer:hover .ad_descr {
            color: #fff;
        }

        .adContainer:hover .ad_bnt {
            color: #fff;
        }

        .ad1 {
            border: 1px solid #ccc;
            border-radius: 5px 0 0 5px;
        } 

        .ad2 {
            border: 1px solid #ccc;
            border-radius: 0 5px 5px 0;
        } 

        .ad_option {
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            color:  #ccc;
        }

        .ad_header {
            font-weight: lighter;
            font-size: 40px;
            text-align: center;
            padding: 35px 0;
            margin: 0 15%;
        }

        .ad_descr {
            font-size: 16px;
            font-weight: lighter;
            line-height: 26px;
            color: #ccc;
            padding-bottom: 70px;
            margin: 0 10%;
        }

        .ad_bnt {
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px;
            background-color: transparent;
            padding: 20px 30px;
            border: 3px solid #FBC52B;
            border-radius: 35px;
            cursor: pointer;
        }`;
 
    document.head.appendChild(style);
});