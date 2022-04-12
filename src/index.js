import _ from 'lodash';
import './style.css';
import Icon from './puddino.jpg'
import Icon2 from './food.jpg'

var content = document.getElementById('content');

const navbar = () => {
    const nav = document.createElement('nav');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    a1.classList.add('home')
    a2.classList.add('recipe')
    a1.innerText = "Home ";
    a2.innerText = " Recipe";

    nav.appendChild(a1);
    nav.appendChild(a2);
    return nav;    
}

function homepage() {
    const element = document.createElement('div');
    
    
    element.classList.add('home');
  
    const myIcon = new Image();
    myIcon.src = Icon2;

    element.appendChild(myIcon);
    return element;
}

content.appendChild(navbar());
content.appendChild(homepage());

var recipe = document.getElementsByClassName('recipe');

recipe.addEventListener('click', recipe)

function recipe(){
    // content.removeChild(homepage());
    console.log("click");
}