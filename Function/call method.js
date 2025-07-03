// var greeting="Hi";

// var messenger = {
//     greeting:"Hello"
// }


// function say(name){
//     console.log(this.greeting+" "+name);
// }

// say.call(this,"Shanto");

var greeting = "Hi";

var messenger = {
    greeting: "Hello"
};

function say(name) {
    console.log(this.greeting + " " + name);
}

say.call(messenger, "Shanto"); // 👈 This works as expected
