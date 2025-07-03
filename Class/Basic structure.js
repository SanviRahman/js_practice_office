class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getDisplay(){
        return this.name+" "+this.age; 
    }
}

let p= new Person ("Shanto",25);
console.log(p.getDisplay());