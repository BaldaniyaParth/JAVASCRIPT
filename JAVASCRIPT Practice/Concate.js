let str = ["Parth", "Prince", "Jay", "Jaydip"];

let concat = function(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result += str[i];
    }
    console.log(result);
}

concat(str);