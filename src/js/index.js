// setting our variables
const inputValue = document.querySelector(".inputVal");
const button = document.querySelector(".submit");
const tempValue = document.querySelector(".temperature");
const descValue = document.querySelector(".description");
const humValue = document.querySelector(".humidity");
const iconValue = document.querySelector(".icon");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&units=imperial&appid=da0a318dadbce04410d8277c890cd27c"
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const description = response["weather"][0]["description"];
      const temp = response["main"]["temp"];
      const humidity = response["main"]["humidity"];
      const iconID = response["weather"][0]["icon"];
      console.log(description);
      console.log(temp);
      console.log(humidity);
      console.log(iconID);

      tempValue.innerHTML = "Temperature: " + temp + "°F";
      humValue.innerHTML = "Humidity: " + humidity + "%";
      descValue.innerHTML = "Description: " + description;
      const imgSrc = "http://openweathermap.org/img/w/" + iconID + ".png";

      iconValue.innerHTML =
        '<img src="' + imgSrc + '"alt="Icon for the weather" />';
    });

  // .catch(() => alert("Fix it."));
});

// create a list of our used consts
// const { main, name, sys, weather } = data;
// const list = document.createElement("list");
// list.classList.add("city");

// create the list, innerHTML, or do show/hide divs

// function() {
//   fetch(
//         "api.openweathermap.org/data/2.5/weather?q=" +
//           inputValue +
//           "&units=imperial&appid=da0a318dadbce04410d8277c890cd27c"
//       )
//       .then((response)=> {
//         if (!response.ok) {
//           alert("No");
//         }
//         return response.json();
//       })
//       .then((data)=> this.displayWeather(data));
// }

// displayWeather: function(data) {
//   const {name} = data;
//   const {icon , description} = data.weather[0];
//   const {temp, humidity} = data.main;
//   document.querySelector(".city").innerText = "Weather in" + name;
//   document.querySelector(".icon").src =
//   "https://openweathermap.org/img/wn/" + icon + ".png";
//   document.querySelector(".description").innerText = description;
//   document.querySelector(".temp").innerText = temp + "°F";
//   document.querySelector(".humidity").innerText =
//   "Humidity: " + humidity + "%";

// }

// document.querySelector(".search button").addEventListener("click", function () {
//   weather.search();
// });

// document
//   .querySelector(".search-bar")
//   .addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weather.search();
//     }
//   });
