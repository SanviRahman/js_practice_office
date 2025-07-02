//map
let objArr=[
    {name:"shanto",age:25,gender:"male"},
    {name:"Oboni",age:20,gender:"female"},
    {name:"Sanvi",age:27,gender:"male"}
]
objArr.map((item)=>{
    if(item.name==="Oboni"){
        console.log(item);
    }
})