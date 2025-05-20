function display(sum)
{
    console.log(sum);
}
function add(a,b,callback)
{
    let sum=0;
    sum=a+b;

    if(callback)
    {
        callback(sum);
    }

    return sum;
}

add(5,6,display);