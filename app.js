let toggle  = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar");
let boxes = document.querySelectorAll(".box");
let toggleswitch = document.querySelector(".toggle-switch");
let body = document.querySelector("body");
let modetext = document.querySelector(".mode-text");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

toggle.addEventListener("click",()=>{
    if(sidebar.classList.contains("close")){
        sidebar.classList.remove("close");
    }else{
        sidebar.classList.add("close");
    }
})

toggleswitch.addEventListener("click", ()=>{
    if(sidebar.classList.contains("dark")){
        sidebar.classList.remove("dark");
        body.style.backgroundColor="#E4E9F7"
        modetext.innerText = "Light Mode";
        moon.classList.add("hide");
        sun.classList.remove("hide");
    }else{
        sidebar.classList.add("dark");
        body.style.backgroundColor="black";
        modetext.innerText = "Dark Mode";
        sun.classList.add("hide");
        moon.classList.remove("hide");
    }
})