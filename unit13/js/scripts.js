const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5586437&appid=e31dd1bdc392093a5cac433b03b8fc1d&units=imperial";

const d = new Date();
const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

fetch(apiURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
        console.log(weatherInfo);

        let cityName = document.createElement("h1");
        cityName.textContent = `${weatherInfo.city.name}, ${weatherInfo.city.country}`;
        document.getElementById('place').appendChild(cityName);

        let forecastDayNumber = todayDayNumber;
        console.log(forecastDayNumber);

        for (i = 0; i < weatherInfo.list.length; i++) {
            var time = weatherInfo.list[i].dt_txt;
            if (time.includes('18:00:00')) {

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {
                    forecastDayNumber = 0;
                }

                let theDayName = document.createElement("div");
                theDayName.className = "dayName";
                theDayName.textContent = weekday[forecastDayNumber];

                let theTemp = document.createElement("p");
                theTemp.className = "dayTemp";
                theTemp.textContent = weatherInfo.list[i].main.temp + `\xB0`;

                let iconCode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
                let theIcon = document.createElement("img");
                theIcon.src = iconPath;

                let theDay = document.createElement("div");
                theDay.className = "forecastCard";

                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                document.getElementById('weatherForecast').appendChild(theDay);

            } // end if
        } // end for
    });