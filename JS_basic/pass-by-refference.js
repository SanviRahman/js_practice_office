var obj={
    b:20
}
function myFunc(obj)
{
    obj.b=obj.b+100;
    console.log(obj.b);//120
}
myFunc(obj);
console.log(obj.b);//120