import _ from 'lodash';
import './style.css';
import Icon from './puddino.jpg'
import Icon2 from './food.jpg'

var content = document.getElementById('content');

const navbar = () => {
    const nav = document.createElement('nav');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    a1.setAttribute('id','home')
    a2.setAttribute('id','recipe')
    a1.innerText = "Home ";
    a2.innerText = " Recipe";

    nav.appendChild(a1);
    nav.appendChild(a2);
    return nav;    
}

function homepage() {
    const element = document.createElement('div');
    
    
    element.classList.add('home');
    element.setAttribute('id','homeid');
  
    const myIcon = new Image();
    myIcon.src = Icon2;

    element.appendChild(myIcon);
    return element;
}

content.appendChild(navbar());
content.appendChild(homepage());


var recipe = document.getElementById('recipe');

let recipeClick = () => content.removeChild(content.children[1]);

recipe.addEventListener('click', recipeClick)