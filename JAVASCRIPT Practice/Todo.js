
let option = prompt("Enter the option :");

let arr = [];
// let option = "Add";



while(true){
    if(option == "Quit"){
        console.log("Quit");
        break;
    }


    if(option == "List"){
        for(let i=0; i<arr.length; i++){
            console.log(i, arr[i]);
        }
    }else if(option == "Add"){
        let task = prompt("Enter the Value");
        arr.push(task);
        console.log("Task Added")
    }else if(option == "Delete"){
        let item = prompt("Enter the Task index");
        arr.splice(item,1);
        console.log("Task Deleted");
    }

    option = prompt("Enter the option :");

}


