console.log("hello world!!!!!");

var title = document.querySelector("h1");
title.textContent = "Ricardo Rodrigues";

var city = document.querySelector("#city");
city.textContent = "Americana, SP";

var personalDataArray = document.querySelectorAll(".personal-data");
console.log(personalDataArray);
personalDataArray = Array.from(personalDataArray);
console.log(personalDataArray);

var data = Array.from(document.querySelectorAll(".data"));
console.log(data);

for (var i = 0; i < data.length; i++) {
  var currentElement = data[i];
  currentElement.classList.add("emphasis");
}
