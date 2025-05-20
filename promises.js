let promise1=new Promise((resolve,reject)=>
{
    let chekPromise= true;
    if(chekPromise)
    {
        resolve("Promise is Successfull");
    }
    else{
        reject("Promise is not Successfull")
    }
});

let promise2=new Promise((resolve,reject)=>{
    var let=0;
    if(x==0)
    {
        resolve("Yeah!This value is Zero");
    }
    else{
        reject()
    }
})




promise1.then((res)=>
{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
