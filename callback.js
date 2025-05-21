function display(sum)
{
    console.log(sum);
}
function add(a,b,callback)
{
    let sum=0;
    sum=a+b;

    callback(sum);
}

add(5,6,display);