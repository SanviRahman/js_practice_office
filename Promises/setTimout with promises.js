function getUsers(callback){
    setTimeout(()=>{
        callback([
            {username:"Sanvi", age:25},
            {username:"Shanto",age:24},
        ]);
    },1000);

}

function findUser(username,callback){
    getUsers((users)=>{
        const user= users.find((index) => index.username === username);
        callback(user);
    })
}

findUser("Sanvi",console.log);