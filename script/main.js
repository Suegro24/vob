const language = document.querySelector('#language');
const hamburger = document.querySelector('#hamburger');

const changeLanguage = function() {
    const lang = this.value;
    
    switch(lang) {
        case "pl": {
            window.location = '../index.html';
            break;
        }
        case "eng": {
            window.location = './eng/index.html';
            break;
        }
    }
}

const switchMenu = function() {
    const menu = document.querySelector('#menu');
    menu.style.display = 'flex';
}

language.addEventListener('change', changeLanguage, false);
hamburger.addEventListener('click', switchMenu, false);