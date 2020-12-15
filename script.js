

window.onload = () => {
    navigator.geolocation.getCurrentPosition(success);
}
 
function success(position){
    let crd = position.coords;
  
    let lat = crd.latitude;
    let long = crd.longitude;
      
    const url = `https:/api.weatherapi.com/v1/current.json?key=f6eba6a86b784c17acd75643201112&q=%20${lat},${long}`;


    fetch(url,{mode : 'cors'}).then(weather => {
    return weather.json()
    }).then(display);

}





function display(weather){

    let city=document.querySelector('#city_name');
    city.innerText = `${weather.location.name}`;
      
    let time_element=document.querySelector('#time_id')
    let current_time=new Date();
    let hour=current_time.getHours();
    let min=current_time.getMinutes();
    if(min<10){
        min = '0'+min;
    }
    if(hour<10){
        hour = '0'+hour;
    }
    time_element.innerText= `${hour+':'+min}`;


    let weather_msg=document.querySelector('#weather_des');
    weather_msg.innerText=`${weather.current.condition.text}`;


    let wind_speed=document.querySelector('.wind_text');
    wind_speed.innerText=`${weather.current.wind_kph+' Km/h'}`


    let humidity=document.querySelector('.humidity_text');
    humidity.innerText=`${weather.current.humidity+'%'}`;


    let cloud=document.querySelector('.cloud_text');
    cloud.innerText=`${weather.current.cloud}`;

    let temp=document.querySelector('.temperature');
    temp.innerText=`${weather.current.temp_c+'°'}`;
}


