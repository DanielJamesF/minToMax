const arr = [1, 5, 3, 5, 2];

const max = arr.reduce((a, b) => {
    return Math.max(a, b) 
});

const min = arr.reduce((a, b) => {
    return Math.min(a, b) 
});

console.log(max);

console.log(min);