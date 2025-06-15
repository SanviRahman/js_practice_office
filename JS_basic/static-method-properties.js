class MyClass
{
    static count =10;
    static sayHello(){
        console.log("Hello from static method!");
    }
}

// console.log(MyClass.count);
// MyClass.sayHello();

myObj=new MyClass();
console.log(myObj.count);
myObj.sayHello;