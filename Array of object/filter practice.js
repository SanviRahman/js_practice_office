let arr=[10,20,30,40,50];

function canVote(age){
    if(age>20){
        return age;
    }
}
console.log(arr.filter(item=>canVote(item)));
