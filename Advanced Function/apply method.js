const person ={
    fname:"Sanvi",
    lname:"Rahman",
    age:25
}

function greet(greeting,message){
    return `${greeting} ${this.fname} ${message}`;
}



let result= greet.apply(person,['Hello','How are you?']);
// let result = greet.call(person,'Hello', 'How are you?');
console.log(result);