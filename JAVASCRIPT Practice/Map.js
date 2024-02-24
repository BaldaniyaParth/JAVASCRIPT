let nums = [4,9,3,7,6,1,5];

let square = nums.map( (num) => {
    return num*num;
})

console.log(square);

let sum = nums.reduce( (el,num) => {
    return el+num;
})

console.log(sum);

let avg = sum/nums.length;

console.log(avg);