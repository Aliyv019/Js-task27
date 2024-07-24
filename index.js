const api_key="5c1e801a98de55b805c069472e3bdc3a"

async function fetchData(){
    const city=document.querySelector('input').value
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        const data=await response.json()
        console.log(data);
        document.querySelector('input').value=""
        document.querySelectorAll('span')[0].textContent=`${city}`
        document.querySelectorAll('span')[1].textContent=`${Math.round(data.main.temp)}°C`
        document.querySelector('img').src=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }
    catch (error){
        console.log(error.message);
    }
}
document.querySelector('button').addEventListener('click',fetchData)
