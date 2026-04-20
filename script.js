//function to response of form button click
let inputValue;
const ul = document.querySelector("#menu");
const form = document.querySelector("form");
const input = document.querySelector("input");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    ul.appendChild(newBundle())
    input.value = "";
    input.focus();
});


//generate new list;(span, button), bundle
const newBundle = () =>{
    const li = document.createElement("li");

    const span = document.createElement("span");
        span.innerText = inputValue;

    const btn = document.createElement("button");
    btn.addEventListener("click", (e)=>{
        const li = e.target.parentNode;
        li.remove();
    });
    btn.textContent = "Delete";

    li.appendChild(span);
    li.appendChild(btn);
    return li;
};

//capture & save user input dynamically
input.addEventListener("keyup", (e)=>{
    inputValue = e.target.value;
});

