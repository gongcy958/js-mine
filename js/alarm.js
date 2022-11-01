const output = document.querySelector("#output");
const button = document.querySelector('#set-alarm');

function setAlarm(){
    window.setTimeout( () => {
        output.textContent = "Wake up";
    },1000);
}

button.addEventListener("click",setAlarm);