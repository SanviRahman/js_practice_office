function getUsers(){
    return [
        {username:"Sanvi Rahman", age:25},
        {username:"Shanto",age:24},
    ]
}

function findUser(username){
    const users=getUsers;
    const user=users.find((user)=> user.username===age);
    return user;
}

console.log(findUser('25'));