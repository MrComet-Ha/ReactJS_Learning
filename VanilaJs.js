const button = document.getElementById("btn");
const span = document.querySelector("span");
let count = 0;
function clickConut(){
    count += 1;
    span.innerText=`Total click : ${count}`;
}

button.addEventListener("click", clickConut);