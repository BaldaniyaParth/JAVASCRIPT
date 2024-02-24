let arr = [1,9,3,4,5,7,1,6,2];

// arr.sort();
// console.log(arr[arr.length-1]);

let max = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i] > 0 && arr[i]>max){
        max= arr[i];
    }
}

console.log(max);
