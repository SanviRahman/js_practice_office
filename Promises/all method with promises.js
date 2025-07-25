const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise 1 fulfilled");
        resolve(1);
    },1000);
})


const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Promise 2 fulfilled");
        resolve(2);
    },2000);
})

const p =Promise.all([p1,p2]);
p.then((value)=>{
    console.log('Return Promises');
    console.log(value);
})