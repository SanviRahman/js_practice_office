let output = document.querySelector('.output');


function Clock() {
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let mils = date.getMilliseconds();
    let h = Number(hours) - 12;
    output.innerHTML = h + " :" + minute + ":" + second + ":"+ mils;
}

setInterval(() => {
    Clock();
}, 100)