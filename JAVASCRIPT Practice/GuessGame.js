let num = prompt("Enter the Maximum Number");

let random = Math.floor(Math.random() * num)+1;

let guess = prompt("Enter the number");

while(true){
    if(guess == 'quit'){
        break;
    }

    if(guess == random){
        alert("You Win");
        break;
    }else{
        guess = prompt("Enter the number");
    }
}
