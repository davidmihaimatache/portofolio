const getPosition = () => {
  return new Promise((resolve, reject) => {
    const onSuccess = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const pos = [lat, lng];

      resolve(pos);
    };

    const onError = () => {
      console.log("Can't get location info");
      reject();
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });
};
const getLocationAndWeather = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let position = await getPosition();
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=6de87eaee4c741ae8b9170828240903&q=${position[0]},${position[1]}&aqi=yes`,
        { mode: "cors" }
      );
      const { location, current: weather } = await response.json();
      resolve({ location, weather });
    } catch (error) {
      reject();
    }
  });
};

const weekDays = [
  "Duminică",
  "Luni",
  "Marți",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sâmbătă",
];
function getWeatherSVG() {
  switch (weather.condition.code) {
    case 1087:
      return "./public/thunder.svg";
    case 1000:
      if (weather.is_day) return "./public/sunny.svg";
      else return "./public/cloudy.svg";
    case 1003:
    case 1006:
      if (weather.is_day) return "./public/cloudy-day-3.svg";
      else return "./public/cloudy-night-3.svg";

    case 1009:
    case 1030:
    case 1135:
    case 1147:
      return "./public/cloudy.svg";
    case 1063:
    case 1180:
    case 1183:
    case 1186:
    case 1189:
    case 1192:
    case 1195:
    case 1198:
    case 1201:
    case 1240:
    case 1243:
    case 1246:
    case 1273:
    case 1276:
      if (weather.is_day) return "./public/rainy-3.svg";
      else return "./public/rainy-6.svg";
    case 1066:
    case 1114:
    case 1210:
    case 1213:
    case 1216:
    case 1219:
    case 1222:
    case 1225:
    case 1255:
    case 1258:
    case 1279:
    case 1282:
    case 1069:
    case 1072:
    case 1117:
    case 1237:
    case 1261:
    case 1264:
      if (weather.is_day) return "./public/snowy-3.svg";
      else return "./public/snowy-6.svg";
    case 1150:
    case 1153:
    case 1168:
    case 1171:
    case 1204:
    case 1207:
    case 1249:
    case 1252:
      if (weather.is_day) return "./public/rainy-3.svg";
      else return "./public/rainy-6.svg";
  }
}
const { location, weather } = await getLocationAndWeather();
console.log(location, weather);
const city = document.getElementById("city");
const country = document.getElementById("country");
const weekDay = document.getElementById("weekDay");
const day = document.getElementById("day");
const month = document.getElementById("weekDay");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");

const wind = document.getElementById("wind");
const feelsLike = document.getElementById("feelsLike");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const uv = document.getElementById("uv");
function populateData() {
  const date = new Date();

  city.innerText = location.name;
  country.innerText = location.country;

  day.innerText = date.getDate();
  month.innerText = date.getMonth();
  weekDay.innerText = weekDays[date.getDay()];

  temp.innerText = `${weather.temp_c}°`;
  icon.src = getWeatherSVG();

  wind.innerText = `${weather.gust_kph} km/h`;
  feelsLike.innerText = `${weather.feelslike_c}°`;
  humidity.innerText = `${weather.humidity} %`;
  pressure.innerText = `${weather.pressure_mb} mb`;
  uv.innerText = weather.uv;
}

populateData();
