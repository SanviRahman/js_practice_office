let n;
function add(n){
    if(n==0)return;
    console.log(n);
    add(n-1);
}
add(5);