var arr=[10,20,30,40,50];

var newArray= arr.filter(function(x)
{
    if(x>25){
        return x;
    }
})
console.log(newArray);