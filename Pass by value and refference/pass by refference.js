let person={
    name:"Sanvi",
    age:25,
}

function increaseAge(obj){
    obj.age+=1;
    console.log(obj.age);//26
}

increaseAge(person);
console.log(person.age);//26