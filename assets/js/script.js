var apiKey = `3be2b2b6acc21e3760901d15acf91f72&q=`;
var userInput = document.querySelector(`.inputBox`).value;
var search = document.querySelector(`button`);
var loc = document.querySelector(`.location`);
var icon = document.querySelector(`#icon`);
var temp = document.querySelectorAll(`.temp`);

search.addEventListener("click", searchCity());

function searchCity() {
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?appid=3be2b2b6acc21e3760901d15acf91f72&q=Orlando&cnt=6&units=imperial')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
        .then((response) => {
            if (!response) {
                alert("invalid location");
            } else {
                return response.json();

            }



        })
        .then((data) => {
            
            const { temp } = data.list.temp;
            const location = data.city.name;
            const { icon } = data.list[0].weather[0];

            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

            icon.src = iconUrl;
            loc.textContent = `${location}`;
            temp.textContent = `${temp}`;

            


        })

}



