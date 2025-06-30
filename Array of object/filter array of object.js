let objArr=[
    {name:"shanto",age:25,gender:"male"},
    {name:"Oboni",age:20,gender:"female"},
    {name:"Sanvi",age:27,gender:"male"}
]
const search=objArr.filter(item=>item.name === "Oboni");
console.log(search);