

const apikey = "a46a5b15c69a97e348b13c6bb57a8dd7";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const Icon= document.querySelector(".icon");
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiUrl+ city+`&appid=${apikey}`);
    const data= await response.json();

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity+"%";
    document.querySelector(".wind").innerHTML= data.wind.speed+" km/hr";
    if(data.weather[0].main== "Clouds"){
        Icon.src= "clouds.png";
    }else if(data.weather[0].main== "Clear"){
        Icon.src= "clear.png";
    }else if(data.weather[0].main== "Rain"){
        Icon.src= "rain.png";
    }else if(data.weather[0].main== "Drizzle"){
        Icon.src= "drizzle.png";
    }else if(data.weather[0].main== "Mist"){
        Icon.src= "mist.png";
    }
    document.querySelector(".weather").style.display= "block";
}
searchbtn.addEventListener("click",()=>{
        checkWeather(searchbox.value);
});

  


//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=a46a5b15c69a97e348b13c6bb57a8dd7