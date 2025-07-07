function getUsers(callback){
    setTimeout(()=>{
        callback([
            {username:"Shanto",age:25},
            {username:"Sanvi",age:26},
        ])
    },1000)
}

function findUser(username,callback){
    getUsers((users)=>{
        const user=users.find((index)=> index.username===username);
        callback(user);
    })
}

findUser("Shanto",console.log);