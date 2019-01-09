import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/greet';
import Content from './src/Content';
import Footer from './src/Footer';
import Navigo from 'navigo';
import Store from './src/Store';

var router = new Navigo(window.location.origin);

var root = document.querySelector('#root');


var State = {
    'posts': [],
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

var store = new Store(State);


function handleNav(params){
    store.dispatch((state) => {
        state.active = params.page;
        
        return state;
    }
    );
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

    store.addListener(render);

    router
        .on('/:page', handleNav)
        .on('/', () => handleNav({ 'page': 'Home' }))
        .resolve();

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => store.dispatch((state) => {
            state.posts = posts;
            
            return state;
        }));