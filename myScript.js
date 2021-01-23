let inputElement = document.querySelector("#nomeCidade");
let formElement = document.querySelector("#formClima");
let contentElement = document.querySelector("dadosClima");

//let access_key="158844845ff2e24f95713211a5ab66b0";
//console.log(inputElement);
//console.log(formElement);


   
    //a subscrição free não permite alterar a lingua
function climaAtual(query){
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+query)
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
       document.querySelector("#dadosClima img").src=response.current.weather_icons;
       console.log(response);
    })
    //window.alert(requiscao.cidade+requiscao.senha);
}
function localizacao(){
    fetch("http://api.ipstack.com/check?access_key=cf0807d4e5aedccbd263028e10dcb2cb")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
       console.log(response);
       climaAtual(response.city);
    })
}
//não disponivel para subscrição gratis =(
function previsao(query){

}

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    let   query= inputElement.value;
    climaAtual(query);    
    
});

function mudarTab(id){
    let classes=document.querySelector("#"+id+" a").classList;
    console.log(classes);
    if(classes.length>2){
       
    }else{        
        if(document.querySelector("#"+id).id=="atual"){
            document.querySelector("#previsao a").classList.remove("active");
            document.querySelector("#atual a").classList.add("active");
            let   query= inputElement.value;            
            climaAtual(query);
            //window.alert("sou o atual");
        }else{
            document.querySelector("#atual a").classList.remove("active");
            document.querySelector("#previsao a").classList.add("active");
            let   query= inputElement.value;            
            //climaAtual(query);
            //window.alert("sou a previsao");
        }
        
    }
}

window.onload = function (){
    //localizacao();     
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"New York")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card1D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card1T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card1 .climaImg").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"Dubai")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card2D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card2T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card2 .climaImg").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"Berlim")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card3D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card3T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card3 .climaImg").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+"Sao Paulo")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
  
       document.querySelector("#card4D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card4T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card4 .climaImg").src=response.current.weather_icons;
       
    })
}
