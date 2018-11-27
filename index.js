
var userName = prompt('What is your name?');
var title = document.querySelector('h1');

var greet = function greet(){
  if(!userName){
  userName = prompt('Im not going to stop asking. Whats your name?');

   greet();
  } else{
        title.textContent += `,  ${userName}`;
    }
};


 greet();
  
import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';


document.querySelector('#root').innerHTML = `
    ${Navigation}
    ${Header}
    ${Content}
    ${Footer}
    `;
