class Man {
    #age;
    #fName;
    #lName;


    constructor(age,fName,lName) {
        this.age = age;
        this.fName = fName;
        this.lName = lName;
    }
   
    get age() {
        return this.#age;
    }

    set age(value) {
        if (value <= 18) {
            throw new Error("Age negative hote pare na");
        }
        this.#age = value;
    }


    getFullName(){
        return `${this.fName} ${this.lName}`;
    }

}
let obj11 = new Man(18, "Sanvi", "Rahman");
obj11.age=18;
console.log(obj11.age);
