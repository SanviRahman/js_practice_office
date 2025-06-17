function getUsers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([
                {username:"Shanto",id:201},
                {username:"Sanvi",id:202}
            ])
        },5000);
    })
}
const promise=getUsers();
promise.then((res)=>{
    console.log(res);
})

