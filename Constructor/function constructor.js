function Person(fName,lname){
    this.fName=fName;
    this.lname=lname;

    this.getFullName=()=>{
        return this.fName+" "+this.lname;
    }
}

let person= new Person("Sanvi","Rahman");
console.log(person.getFullName());