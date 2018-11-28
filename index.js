import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/greet';
import Content from './src/Content';
import Footer from './src/Footer';


var state = {
    'title': 'Welcome to my Savvy Coders Portfolio Project'
}

document.querySelector('#root').innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;


greet();