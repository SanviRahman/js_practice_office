function isOdd(number){
    if(number%2==1){
        return number;
    }
}

function isEven(number){
    if(number%2==0){
        return number;
    }
}

function filter(numbers,callback){
    let res=[];
    for(let number of numbers){
       if(callback(number)){
            res.push(number);
       }
    }
    return res;
}

let numbers=[0,1,2,3,4,5,6,7,8,9];

console.log(filter(numbers,isOdd));
console.log(filter(numbers,isEven));