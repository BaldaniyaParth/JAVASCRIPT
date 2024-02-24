let inp = document.querySelector("input");

inp.addEventListener("input", function(e){
    let h2 = document.querySelector("h2");
    if((inp.value).match(/^[_A-zA-Z]*((-|\s)*[_A-zA-Z])*$/g)){
        h2.innerText = inp.value;
    }else{
        h2.innerText = "Plese enter only Alphabet";
        inp.value = "";
    }
} );

