function greet() {
  console.log("Hello " + this.name+"\n"+"Age "+this.age);//akahne this refer kore person ke
}

const person = 
{ 
    name: "Shanto",
    age: "25"
}

greet.call(person); // Output: Hello Shanto 
                    // Age 25
