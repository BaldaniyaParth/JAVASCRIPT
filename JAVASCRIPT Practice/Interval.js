let print = setInterval( () => {
    console.log("Hello World!");
},2000);

setTimeout( () => {
    clearInterval(print);
},12000);