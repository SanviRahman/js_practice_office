// function add(num1,num2){
//     let sum1=0;
//     sum1=num1+num2;
//     console.log(sum1);
// }
// function add(num1,num2){
//     let sum2=0;
//     sum2=num1+num2;
//     console.log(sum2);
// }

// add(10,20);
// add(10,15);
//same naam e parameter same hole c++,java te error ashe.

//Dispatacher function
function add() {
    if (arguments.length == 2) {
        return addTwo(arguments[0], arguments[1]);
    }
    else if (arguments.length === 3) {
        return addThree(arguments[0], arguments[1], arguments[2]);
    }
    else {
        throw new Error("Invalid number of Arguments.");
    }
}


function addTwo(a, b) {
    return a + b;
}


function addThree(a, b, c) {
    return a + b + c;
}


console.log(add(10, 20));
console.log(add(15, 10, 5));