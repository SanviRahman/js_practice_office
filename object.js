const person={
    first_name: "Sanvi",
    last_name: "Rahman",
    age:"25",
    gender:"Male",
    fullName: function(){
        let full_name= this.first_name+" "+this.last_name;
        return full_name;
    }
}
console.log(person.fullName(),person.age);