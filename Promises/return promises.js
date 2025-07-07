function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if (success == true) {
                resolve([
                    { name: "Sanvi Rahman", age: 25 },
                    { name: "Shanto", age: 24 },
                ])
            }
            else{
                reject("Error Object");
            }
        }, 1000);
    });
}

const promise = getUsers()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })