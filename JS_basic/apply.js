function add (a,b){
    return (a+b)* this.c;
}

let obj1={
    c:3
}

let res=add.apply(obj1,[5,10]);
console.log(res);