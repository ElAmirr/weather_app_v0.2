window.addEventListener("load", () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone')
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            
            fetch(`pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${long}&appid=7d599ce045a697247a327dd3f4029960`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const temperature = data.list[0].main.temp;
                    const description = data.list[0].weather[0].description;
                    const timezone = data.city.name;
                    //Set DOM Elements from the API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = timezone;
                });

        });
    }
});