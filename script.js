let heading = document.querySelector("h1");
let button = document.querySelector("button");
button.addEventListener("click", function(){
    heading.textContent = "welcome to web AR";

    button.textContent = "loading...";

    console.log("opening AR experiance...");

});