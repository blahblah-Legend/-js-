const weathertext = document.querySelector("#weather")



Getweather = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={e65d318e7501f94776545241e11cb36b}`

    fetch(url)
    .then((Response) => Response.json())
    .then((Data) => {
        weathertext.innerText = `${Data.name}, ${Data.weather[0].main}`})


}

failed = () => {
    alert("failed to load weather :(")
}

navigator.geolocation.getCurrentPosition(Getweather, failed)