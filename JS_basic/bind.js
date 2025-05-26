const person={
    name:"Shanto",
    age:25,
    greet:function()
    {
        console.log("Hi, "+ this.name+ "\nAge:"+this.age);
    }
}
// const greetFunction=person.greet; Answer is: Undefine
const greetFunction=person.greet.bind(person); 
greetFunction();
console.log(person)