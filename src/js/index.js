import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

// setting our variables
var inputValue = document.querySelector(".inputVal");
var button = document.querySelector(".button");

button.addEventListener("click", function (startAPI) {
  fetch(
    "api.openweathermap.org/data/2.5/weather?q=" +
      inputValue +
      "&appid=da0a318dadbce04410d8277c890cd27c"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(() => alert("Fix it."));
});

// create a list of our used consts
const { main, name, sys, weather } = data;
const list = document.createElement("list");
list.classList.add("city");

// create the list, innerHTML, or do show/hide divs
