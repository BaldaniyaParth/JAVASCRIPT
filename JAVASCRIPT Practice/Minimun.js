let arr = [5,58,6,22,9,45,3,9,2,6];

let min = arr.reduce((min,el) => {
    if(min < el){
        return min;
    }
    else{
        return el;
    }
})

console.log(min);

