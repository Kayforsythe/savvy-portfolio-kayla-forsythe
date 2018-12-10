import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/greet';
import Content from './src/Content';
import Footer from './src/Footer';


var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to my Savvy Coders Portfolio Project',
        'links': ['blog', 'contact', 'project']
    },
    'blog': {
        'title': 'Please read my insightful Blog',
        'links': ['home', 'contact', 'project']
    },
    'contact': {
        'title': 'Call me maybe',
        'links': ['home', 'blog', 'project']
    },
    'project': {
        'title': 'look at all those chickens',
        'links': ['home', 'blog', 'contact']
    }
};

var root = document.querySelector('#root');

function handleNav(event){
    event.preventDefault();
     
    State.active = event.target.textContent;
    
    render(State); // eslint-disable-line
}

function render(state){
    var links;

    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
    
    greet();

    links = document.querySelectorAll('#navigation a');
    
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', handleNav);
    }
}

render(State);