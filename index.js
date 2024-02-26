const div = document.querySelector('main').appendChild(document.createElement('div'));
const headerPNG = document.querySelector('header').appendChild(document.createElement('div'));
headerPNG.id = 'pngWrapper';

const png = headerPNG.appendChild(document.createElement('img')).setAttribute('src', 'roads-technology.png');




div.innerText = 'Javascript Cursus';
div.style.fontSize = '40px';