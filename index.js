const api_key="5c1e801a98de55b805c069472e3bdc3a"
const city=document.querySelector('input').value

async function fetchData(city){
    city=document.querySelector('input').value
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        const data=await response.json()
        console.log(data);
        document.querySelector('input').value=""
        document.querySelectorAll('span')[0].textContent=`${city}`
        document.querySelectorAll('span')[1].textContent=`${data.main.temp}°C`
    }
    catch (error){
        console.log(error);
    }
}
document.querySelector('button').addEventListener('click',fetchData)
