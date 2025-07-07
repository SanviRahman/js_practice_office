let person={
    name:"Sanvi Rahman",
    getName: function(){
        console.log(this.name);
    }
}

let f= person.getName.bind(person);
setTimeout(f,1000);