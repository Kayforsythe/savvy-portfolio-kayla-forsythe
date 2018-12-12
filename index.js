import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/greet';
import Content from './src/Content';
import Footer from './src/Footer';
import Navigo from 'navigo';

var router = new Navigo(window.location.origin);


var State = {
    'active': 'Home',
    'Home': {
        'title': 'Welcome to my Savvy Coders Portfolio Project',
        'links': [ 'Blog', 'contact', 'project' ]
    },
    'Blog': {
        'title': 'Please read my insightful Blog',
        'links': [ 'Home', 'contact', 'project' ]
    },
    'contact': {
        'title': 'Call me maybe',
        'links': [ 'Home', 'Blog', 'project' ]
    },
    'project': {
        'title': 'look at all those chickens',
        'links': [ 'Home', 'Blog', 'contact' ]
    }
};

var root = document.querySelector('#root');

function handleNav(params){
    State.active = params.page;

    render(State); // eslint-disable-line
}

function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
    `;
    
    greet();

    router.updatePageLinks();
}


router
    .on('/:page', handleNav)
    .on('/', () => handleNav({ 'page': 'Home' }))
    .resolve();