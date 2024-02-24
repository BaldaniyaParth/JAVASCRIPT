let str = "hello, how are you?."

let vowles = function(str){
    let count = 0;
    let vow = ['a','e','i','o','u'];
    for(let i=0; i<str.length; i++){
        if(vow.includes(str.charAt(i))){
            count++;
        }
    }
    console.log(count);
    
}

vowles(str);    