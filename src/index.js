import _ from 'lodash';
import printMe from './print.js';
import './assets/style/style.css';
import Icon from './assets/images/pin-icon.png';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //element.innerHTML = 'morjens';
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());