var userName = prompt('What is your name?');
    
var greet = function greet(){
  if(!userName){
  userName = prompt('What is your name, forreal this time')

   greet();
  } else{
        alert('Sup ' + userName);
    }
} 


greet();