async function display(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/users");
        let user=await response.json();
        console.log(user);
    }
    catch(err){
        console.log(err);
    }
}
display();