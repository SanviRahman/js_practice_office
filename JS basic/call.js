function greet() {
  console.log("Hello " + this.name+"\n"+"Age "+this.age);
}

const person = 
{ 
    name: "Shanto",
    age: "25"
}

greet.call(person); // Output: Hello Shanto
