async function fetchData(){
    const api_key="26c7b37e3a482d196fe369b701e2d5eb"
    const city=document.querySelector('input').value
    const list=document.querySelector('ul')
    try{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`)
        const data=await response.json()
        console.log(data);
        list.innerHTML=""
        for(let i of data.list){
            if(i.dt_txt.slice(11)=="12:00:00"){
                const listItem=document.createElement('li')
                listItem.innerHTML=`
                    <span>${i.dt_txt.slice(0,11)}</span>
                    <img src="https://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png" style="">
                    <span>${city}</span>
                    <span>${Math.round(i.main.temp)}°C</span>
                    <span>Küləyin sürəti:${i.wind.speed} m/san</span>`
                list.appendChild(listItem)
            }
        }
        
    }
    catch (error){
        console.log(error.message);
    }
}
document.querySelector('button').addEventListener('click',fetchData)
document.querySelector('input').addEventListener('keydown',(e)=> {if(e.key=="Enter"){fetchData()}})