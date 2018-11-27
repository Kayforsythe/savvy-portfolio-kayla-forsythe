

import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/greet';
import Content from './src/Content';
import Footer from './src/Footer';


document.querySelector('#root').innerHTML = `
    ${Navigation}
    ${Header}
    ${greet}
    ${Content}
    ${Footer}
    `;


