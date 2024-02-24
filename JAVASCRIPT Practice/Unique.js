let str = "abcdabcdefgggh";

let unique = function(str){
    
    let result = "";

    for(let i=0; i<str.length; i++){
        
        let curr = str[i]; 
        if(result.indexOf(curr) == -1){
            result += curr;
        }

    }
    
    console.log(result);
}

unique(str);

