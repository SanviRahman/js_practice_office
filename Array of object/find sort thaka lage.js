let objArr=[
    {name:"Oboni",age:19,gender:"female"},
    {name:"Shanta",age:20,gender:"female"},
    {name:"Shanto",age:22,gender:"male"},
    {name:"Sanvi",age:25,gender:"male"}
  ]
  
const conn=objArr.find((value)=>{
    if(value.age>19){
      return value;
    }
});

console.log(conn);