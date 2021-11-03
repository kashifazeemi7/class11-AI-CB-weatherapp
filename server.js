
function fetchWeather() {

  const currentCity = document.getElementById("cityname").value
  console.log(currentCity);
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=5f511aad7265b1011dfa66b335036d06&units=metric`)

      .then(function (response) {
          console.log(response);
          console.log(response.data.main.temp);

          document.getElementById("currentTemp").innerText = response.data.main.temp;
      })
}

//
