const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar")

hamburger.addEventListener("click", ()=>{
    navbar.classList.toggle("show_navbar")
})