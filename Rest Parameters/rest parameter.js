function addArr(...arg){
    let sum=0;
    for(let i=0; i<arg.length;i++){
        sum+=arg[i];
    }
    return sum;
}

let totalSum=addArr(1,2,3,4,5);
console.log(totalSum);