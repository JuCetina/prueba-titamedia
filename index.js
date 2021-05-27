//Trayendo dinámicamente las imágenes
const API_URL = 'https://api.unsplash.com/photos/random?client_id=xOYNnmO46QeZqGOPDuul9sJmV2aSwZ6atPOpbmTYRxk&orientation=portrait&count=9&w=182&h=400';

const makePhoto = (data) => {

    const containers = [];
    
    for(let i = 0; i < 9; i++){
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('item', 'photo');
        
        let imgUrl = data[i].urls.small;
        imgContainer.style.backgroundImage = `url(${imgUrl})`;
        
        containers.push(imgContainer);
    }

    const container = document.querySelector('.container');

    container.append(...containers);

}

const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    makePhoto(data);
}

fetchData(API_URL);

//Botón del menú responsive
const menu = document.querySelector('.menu');
const button = document.querySelector('.menu-button');

const showHide = () => {
    menu.classList.toggle('is-active');
}

button.addEventListener('click', showHide);
