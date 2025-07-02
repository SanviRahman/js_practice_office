 const users=[
    {name: "Alice", age:17},
    {name: "Bob", age:19},
    {name: "Charlie", age:20},
 ]

const result=users.find(value =>{
    if(value.age>17){
        return value;
    }
})
console.log(result);