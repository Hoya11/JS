const API_KEY = "236569ac47fccb952b41a3598a6ed200";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url)
    .then(Response =>Response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:Last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
    
}
function onGeoError(){
    alert("Can't find you.")
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

