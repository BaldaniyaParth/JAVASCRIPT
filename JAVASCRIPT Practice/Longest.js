let country = ["Australia", "Germany", "United States of America"];

let longest = function(country){
    let len = country[0];
    for(let i=0; i<country.length; i++){
        if(country[i].length > len.length){
            len = country[i];
        }
    }
    console.log(len);
}

longest(country);