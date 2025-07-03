class Person{
    constructor(fname,lname,age){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
    }

    getFullName(){
        return this.fname+" "+this.lname+",Age:"+this.age;
    }
}

let p=new Person("Sanvi","Rahman",25);
console.log(p.getFullName());