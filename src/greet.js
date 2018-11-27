var userName = prompt('What is your name?');
var title = document.querySelector('h1');

export default function greet(){
  if(!userName){
  userName = prompt('Im not going to stop asking. Whats your name?');

   greet();
  } else{
        title.textContent += ', '  + userName + '!';
    }
};


 greet();
  