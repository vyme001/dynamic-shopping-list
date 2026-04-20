//function to response of form button click
const form = document.querySelector("form");
form.addEventListener("click", (e)=>{
    e.preventDefault();

});


//capture & save user input dynamically
const input = document.querySelector("input");
let inputValue;
input.addEventListener("keyup", (e)=>{
    inputValue = e.target.value;
});