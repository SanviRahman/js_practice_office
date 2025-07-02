let array=[10,20,30,40,50,60];

let found=array.find((item)=>{
    if (item>20){
        return item;
    }
})

console.log(found);