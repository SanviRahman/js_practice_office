function getUsers(){
    return [
        {username:"Sanvi", age:25},
        {username:"Shanto",age:24},
    ]
}


function findUser(username){
    const users=getUsers();
    const user=users.find((user)=> user.username === username);
    return user;
}

const result = findUser("Sanvi");
console.log(result);