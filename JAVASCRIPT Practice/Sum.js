let number = 287152;
let sum = 0;

while(number>0){
    digit = number%10;
    sum = sum+digit;
    number = Math.floor(number/10);
}

console.log(sum);