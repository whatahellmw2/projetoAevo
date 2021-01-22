let inputElement = document.querySelector("#nomeCidade");
let formElement = document.querySelector("#formClima");
let contentElement = document.querySelector("dadosClima");
let climaAtual;
let access_key="40f434135185e4b16d6743c57c8d8eeb";
//console.log(inputElement);
//console.log(formElement);
formElement.addEventListener("submit", function(event){
    event.preventDefault();
    
    let   query= inputElement.value;
   
    //a subscrição free não permite alterar a lingua
    climaAtual= fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+query)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
       document.querySelector("#pais").innerHTML=response.location.country+", ";
       document.querySelector("#cidade").innerHTML=response.location.name+", ";
       document.querySelector("#regiao").innerHTML=response.location.region;
       document.querySelector("#descricao").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#temperatura").innerHTML=response.current.temperature;
       document.querySelector("#umidade").innerHTML=response.current.humidity;
       document.querySelector("#precip").innerHTML=response.current.precip;
       document.querySelector("#visibilidade").innerHTML=response.current.visibility;
       document.querySelector("#velocidade").innerHTML=response.current.wind_speed;
       document.querySelector("#direcao").innerHTML=response.current.wind_dir;
       document.querySelector("#pressao").innerHTML=response.current.pressure;
       document.querySelector("#uv").innerHTML=response.current.uv_index;
       document.querySelector("#time").innerHTML=response.current.observation_time;
       console.log(response);
    })
    //window.alert(requiscao.cidade+requiscao.senha);
    
    
});
window.onload = function (){
            
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"New York")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card1D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card1T").innerHTML=response.current.temperature;
       document.querySelector("#card1 img").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"Dubai")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card2D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card2T").innerHTML=response.current.temperature;
       document.querySelector("#card2 img").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"Berlim")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card3D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card3T").innerHTML=response.current.temperature;
       document.querySelector("#card3 img").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"Sao Paulo")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card4D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card4T").innerHTML=response.current.temperature;
       document.querySelector("#card4 img").src=response.current.weather_icons;
       
    })
}
 