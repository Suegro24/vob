const language = document.querySelector('#language');
const hamburger = document.querySelector('#hamburger');

console.log(window.location.href);

const changeLanguage = function() {
    const lang = this.value;
    
    switch(lang) {
        case "pl": {
            window.location.href = '/index.html';
            break;
        }
        case "eng": {
            window.location.href = '/eng/index.html';
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