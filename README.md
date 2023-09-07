# Weather-Forecast

## User Story
```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria
```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
```

## Description

I created HTML, CSS, and JS to make a functional Weather Forecast page. When the user visits the page, they will see a text box where they will input a city name. Once the "search" button is clicked, they will see the current date, city name, icon depicting weather climate, temperature, wind, and humidity. Under the current dy forecast, user will see the follow 5 day forecast including the date, icon, temperature, wind, and humidity. User will also see the city name searched save to local storage and appear as a button under the search buttons. User will be able to click the search history buttons and will see the forecast according to the button clicked. The user will also have the chance to clear history, which will refresh the page and clear all search history from the local storage. This was done using bootstrap, jQuery, google fonts, and dayjs. 

## Usage
[Weather App](https://ashleyg5.github.io/Weather-Forecast/)
 
![Weather-Forecast](https://user-images.githubusercontent.com/118938942/231031742-7217e74e-9ba7-4643-96a1-87a766a1ea4a.png)




## Credits

[Resource 1](https://getbootstrap.com/docs/5.3/layout/columns/)

[Resource 2](https://www.w3schools.com/jsref/prop_html_style.asp)

[Resource 3](https://day.js.org/docs/en/display/format)

[Resource 4](https://www.w3schools.com/jquery/jquery_syntax.asp)

My classmates, instructor, and TA's.

## License

MIT

