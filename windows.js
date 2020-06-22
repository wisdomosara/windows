
let welcome = document.querySelector(".welcome");
let button = document.querySelector(".loginbutt");
let signin = document.querySelector(".logbox");
let popup = document.querySelector(".popup");
let off = document.querySelector(".off");
let shut = document.querySelector(".shut");
let bye = document.querySelector(".bye");
let main = document.querySelector(".bg-image");
let container =document.querySelector(".container")
let password = signin.value;
document.querySelector(".bg-image").onclick = function(event){
    if(event.target !== popup) {
        popup.style.display = "none"
    }
}
let name = prompt("Please enter your name?").toUpperCase()
welcome.innerHTML = "WELCOME "  + name;

off.addEventListener("click", function(){
    popup.style.display = "block";
})

button.addEventListener("click", function(){
    button.style.display = "none";
    signin.style.display = "block";
    signin.focus()
})

signin.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        
            button.style.display = "none";
            signin.style.display = "none";
            welcome.style.display = "block"
        
    }
})
shut.addEventListener("click", function() {
    container.style.display = "none";
    document.body.style.backgroundColor = "black"
    bye.style.display = "block"
    main.style.display = "none"
    bye.innerHTML = "GOODBYE " + name
})
