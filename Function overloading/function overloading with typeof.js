function add(a,b){
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}

console.log(add(5,10));
console.log(add("Hi! ","Sanvi"));