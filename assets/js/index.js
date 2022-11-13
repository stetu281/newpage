const navigation = document.querySelector('.navigation');

document.querySelector('.hamburger').addEventListener('click', (e) => {
    navigation.dataset.open = (navigation.dataset.open === "false") ? "true" : "false";
    
    if(navigation.dataset.open === "true") {
        e.target.childNodes[0].src = "./assets/images/icon-menu-close.svg";
    } else {
        e.target.childNodes[0].src = "./assets/images/icon-menu.svg";
    }
});