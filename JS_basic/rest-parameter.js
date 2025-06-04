//Rest Parameter
// function printNumber(x,y,...z)
// {
//     console.log(`X=${x},Y=${y},Z=${z}`);
// }
// printNumber(10,20,30,40,50);
function sum(...args){
    let total=0;

    for(let x of args){
        total+=x;
    }
    return total;
}
console.log(sum(1,2,3,4));