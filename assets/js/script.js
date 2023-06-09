// declared vars for necessary elements/classes/ids
var userInput = document.querySelector(`.inputBox`);
var searchBtn = document.querySelector(`button`);
var loc = document.querySelector(`.location`);
var iconEl = document.querySelector(`#icon`);
var tempEl = document.querySelector(`.temp`);
var windEl = document.querySelector(`.wind`);
var humidEl = document.querySelector(`.humid`);
var currentDayContainer = document.querySelector(`.currentDay`);
var fiveDayContainer = document.querySelector(`.fiveDay`);


//search button event listener, once user inputs a city and click search, the function will execute
searchBtn.addEventListener("click", function (event) {
    event.preventDefault()
    currentDayContainer.classList.remove(`hidden`)
    fiveDayContainer.classList.remove(`hidden`)
    //checks local storage, saves value in local storage, then executes search history function
    var storage = JSON.parse(localStorage.getItem(`cities`)) || []
    storage.push(userInput.value)
    localStorage.setItem(`cities`, JSON.stringify(storage))
    searchHistory()
    //fetches the weather api data according to the user input value
    fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?appid=3be2b2b6acc21e3760901d15acf91f72&q=${userInput.value}&cnt=6&units=imperial`)
        .then(response => response.json())
        //grabbing data, traversing it to reach wanted object
        .then(data => {
            console.log(data);
            const { day } = data.list[0].temp
            const location = data.city.name
            const { icon } = data.list[0].weather[0]
            const { gust } = data.list[0]
            const { humidity } = data.list[0]

            const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
            //displays consts on the current day forecast
            iconEl.src = iconUrl;
            loc.innerText = `${location}`
            var today = dayjs();
            $('.datetitle').text(today.format('MM/DD/YYYY'))
            tempEl.innerText = `Temperature: ` + day + ` °F`
            windEl.innerText = `Wind: ` + gust + ` MPH`
            humidEl.innerText = `Humidity: ` + humidity + ` %`
            //for loop for the 5 day forecast, takes declared consts and displays them in the correct box
            for (let i = 1; i < data.list.length; i++) {
                let currDay = data.list[i];
                const Url = `https://openweathermap.org/img/wn/${currDay.weather[0].icon}@2x.png`
                console.log(day);
                document.querySelector(`#icon-${i}`).src = Url
                document.querySelector(`.datetitle-${i}`).innerHTML = dayjs.unix(currDay.dt).format(`MM/DD/YYYY`)
                document.querySelector(`.temp-${i}`).innerText = `Temperature: ` + currDay.temp.day + ` °F`
                document.querySelector(`.wind-${i}`).innerText = `Wind: ` + currDay.gust + ` MPH`
                document.querySelector(`.humid-${i}`).innerText = `Humidity: ` + currDay.humidity + ` %`
            }
        })






        .catch(error => console.error(error))
})

//search history function which will pull values from local storage, create a button element, and display them on the page
function searchHistory() {
    var storage = JSON.parse(localStorage.getItem(`cities`)) || []
    var btnContainer = document.querySelector(`.buttonContainer`)
    for (let i = 0; i < storage.length; i++) {
        var city = storage[i];
        var button = document.createElement(`button`)

        button.style.margin = "5px"
        button.style.borderRadius = "8px"
        button.textContent = city;
        btnContainer.appendChild(button)

        btnContainer.addEventListener("click", reloadData);
//reload data function which will allow user to click on search history city and will be able to see that cities forecast
        function reloadData(event) {
            const cityName = event.target.textContent;
            fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?appid=3be2b2b6acc21e3760901d15acf91f72&q=${cityName}&cnt=6&units=imperial`)
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem(cityName, JSON.stringify(data));
                    updateHTML(data);
                });
        }
    } 
    //function updatehtml is hand-in-hand with the reload data function ot display weather forecast according to search history city button clicked
    function updateHTML(data) {
        const { day } = data.list[0].temp
        const location = data.city.name
        const { icon } = data.list[0].weather[0]
        const { gust } = data.list[0]
        const { humidity } = data.list[0]

        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`

        iconEl.src = iconUrl;
        loc.innerText = `${location}`
        var today = dayjs();
        $('.datetitle').text(today.format('MM/DD/YYYY'))
        tempEl.innerText = `Temperature: ` + day + ` °F`
        windEl.innerText = `Wind: ` + gust + ` MPH`
        humidEl.innerText = `Humidity: ` + humidity + ` %`

        for (let i = 1; i < data.list.length; i++) {
            let currDay = data.list[i];
            const Url = `https://openweathermap.org/img/wn/${currDay.weather[0].icon}@2x.png`
            console.log(day);
            document.querySelector(`#icon-${i}`).src = Url
            document.querySelector(`.datetitle-${i}`).innerHTML = dayjs.unix(currDay.dt).format(`MM/DD/YYYY`)
            document.querySelector(`.temp-${i}`).innerText = `Temperature: ` + currDay.temp.day + ` °F`
            document.querySelector(`.wind-${i}`).innerText = `Wind: ` + currDay.gust + ` MPH`
            document.querySelector(`.humid-${i}`).innerText = `Humidity: ` + currDay.humidity + ` %`
        }
    }
}

//clears history 
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', function() {
  localStorage.clear();
  location.reload(); 
});