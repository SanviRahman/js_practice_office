function printMe()
{
    console.log("Hello, "+ this.name+"\nAge is:" + this.age);//akhane this global hishabe ase
}

let obj1={
    name: "Sanvi Rahman",
    age:25
}

let obj2={
    name: "Shanto Rahman",
    age:25
}

let binded1=printMe.bind(obj1);//this er sathe obj1 ke bind kore this keyword permanently fix korlam
let binded2=printMe.bind(obj2);


binded1();//printMe() call na kore binded() call korlam
binded2();