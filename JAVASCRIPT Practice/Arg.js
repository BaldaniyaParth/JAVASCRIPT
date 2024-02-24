

let doubleAndArgs = (arr, ...args) => [ 
    ...arr,
    ...args.map( (num) => num*2)
];

console.log(doubleAndArgs([1,2,3],4,5));