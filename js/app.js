const container = document.querySelector(".container")
/*const container = document.querySelector(".container");*/
const autos = [
    {name: "Hostel", image: "/images/hostel_(Large).jpg"},
    {name: "Patient Zero", image: "/images/patient_zero_(Large).jpg"},
    {name: "Raw", image: "/images/raw_(Large).jpg"},
    {name: "Terrifier", image: "/images/terrifier_(Large).jpg"},
    {name: "Terrifier 2", image: "/images/terrifier_2_(Large).jpg"},
    {name: "The Forest", image: "/images/the_forest_(Large).jpg"},
]

const showMovies = () =>{
    let output = ""

    autos.forEach(
    ({name,image}) => 
    (output += `
        <div class="card">
            <img class = "card-avatar" src=${image} loading="lazy"/>
            <h1 class = "card-title">${name}</h1>
        </div>
    `))
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showMovies)

if ("serviceWorker" in navigator){
    console.log("si funciona")
    window.addEventListener("load", function(){
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("Service Worker Registrado"))
            .catch(err => console.log("Service Worker No Registrado"))
    }

    );
}