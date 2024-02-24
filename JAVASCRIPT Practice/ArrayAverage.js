let arr = [5,10,15,20,25,30];

let arrayAverage = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    let avg = sum/arr.length;
    return avg;
}

console.log(arrayAverage(arr)); 