const function1 = () => {
    return "Hello World";
}
console.log(function1());




const function2 = () => {
    const string = "Hello World";
    document.getElementById("text2").textContent = string;
}

const weatherAppAsync = async() => {
    const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=Clearwater&appid=eeee70c5daa7a8997eff5ca2f3d7d931";
    async function getGeo(){
    const response = await fetch(geoUrl)
    const data = await response.json()
    const lat = data[0].lat
    const lon = data[0].lon
    getWeather(lat, lon)
    }
    async function getWeather(lat, lon) {
        const weatherUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=eeee70c5daa7a8997eff5ca2f3d7d931` 
        const response = await fetch(weatherUrl)
        const data = await response.json()
        console.log(data);
    }
    getGeo();
}


const weatherAppThen = () => {
    const geoUrl = "https://api.openweathermap.org/geo/1.0/direct?q=Clearwater&appid=eeee70c5daa7a8997eff5ca2f3d7d931";
    async function getGeo(){
    fetch(geoUrl)
    .then(response => response.json(response))
    .then(data => {console.log(data)
    const lat = data[0].lat
    const lon = data[0].lon
    getWeather(lat, lon)
    })
    }
    function getWeather(lat, lon) {
        const weatherUrl =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=eeee70c5daa7a8997eff5ca2f3d7d931` 
        fetch(weatherUrl)
        .then(response => response.json(response))
        .then(data => console.log(data))
    }
    getGeo();
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault()
    const myUsername = event.target[0].value;
    const myPassword = event.target[1].value;
    const results = {
        username: myUsername,
        password: myPassword
    }
    console.log(results);
    console.log(this);
})
