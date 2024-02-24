let arr = [10,10,55,20,10]  ;

let ans = arr.every((el) => {
    return el % 10 == 0
})

console.log(ans);