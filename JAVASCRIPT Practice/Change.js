let start = ['january', 'july', 'march', 'august'];

start.shift();
start.shift();
start.unshift('june');
start.unshift('july');

console.log(start);

start.splice(0,2,"july","june");

console.log(start);