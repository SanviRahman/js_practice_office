let promise1 = new Promise((resolve, reject) => {
    let chekPromise = true;
    if (chekPromise) {
        resolve("Promise is Successful");
    } else {
        reject("Promise is not Successful");
    }
});

let promise2 = new Promise((resolve, reject) => {
    var x = 1;
    if (x == 0) {
        resolve("Yeah! This value is Zero");
    } else {
        reject("Noh! This value is not Zero");
    }
});

promise1
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error("Promise1 error:", err);
    });

// ✅ Add a catch for promise2 as well
promise2
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error("Promise2 error:", err);
    });
