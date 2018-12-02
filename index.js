import Navigation from './src/Navigation';
import Header from './src/Header';
import greet from './src/greet';
import Content from './src/Content';
import Footer from './src/Footer';


var State = {
    'active': 'home',
    'home': {
        'title': 'Welcome to my Savvy Coders Portfolio Project'
    },
    'blog': {
        'title': 'Please read my insightful Blog'
    },
    'contact': {
        'title': 'Call me maybe'
    },
    'project': {
        'title': 'look at all those chickens'
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
    
    
    links[0].addEventListener(
        'click',
        handleNav
        );
        
        links[1].addEventListener(
            'click',
            handleNav
            
            );
            
            links[2].addEventListener(
                'click',
                handleNav
                );

                links[3].addEventListener(
                    'click',
                    handleNav
                    );
            }
            

            render(State);