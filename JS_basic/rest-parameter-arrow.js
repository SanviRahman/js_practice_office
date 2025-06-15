let cover = (...args)=>{
    let total=0;
    
    for(let x of args){
        total+=x;
    }
    return total;
}

console.log(cover(1,2,3,4));