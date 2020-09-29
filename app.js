

const header = document.querySelector("h3");
const btn = document.querySelector(".btn");

//console.log(btn);
btn.addEventListener("click", function(){

    fetch("https://api.adviceslip.com/advice")
        .then (result => result.json())
        .then(data => {
            header.innerText = data.slip.advice;
        });
     
    //console.log("hello");
});