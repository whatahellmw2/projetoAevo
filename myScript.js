let inputElement = document.querySelector("#nomeCidade");
let formElement = document.querySelector("#formClima");
let contentElement = document.querySelector("dadosClima");
let contador=0;
let access_key="158844845ff2e24f95713211a5ab66b0";



   
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
       document.querySelector("#temperatura").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#umidade").innerHTML=response.current.humidity+"%";
       document.querySelector("#precip").innerHTML=response.current.precip+"mm";
       document.querySelector("#visibilidade").innerHTML=response.current.visibility+"km";
       document.querySelector("#velocidade").innerHTML=response.current.wind_speed+"km";
       document.querySelector("#direcao").innerHTML=response.current.wind_dir;
       document.querySelector("#pressao").innerHTML=response.current.pressure+"mb";
       document.querySelector("#uv").innerHTML=response.current.uv_index;
       document.querySelector("#time").innerHTML=response.current.observation_time;
       document.querySelector("#dadosClima img").src=response.current.weather_icons;
       console.log(response);
    })
    
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
           
        }else{
            document.querySelector("#atual a").classList.remove("active");
            document.querySelector("#previsao a").classList.add("active");
            let   query= inputElement.value;            
            
        }
        
    }
}


function preencherInicio(cidade1,path1,cidade2,path2,cidade3,path3,cidade4,path4){
    localizacao();
    console.log(cidade1+path1+cidade2+path2+cidade3+path3+cidade4+path4);
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+cidade1)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(response){       
       document.querySelector("#card1 h5").innerHTML=cidade1;
       document.querySelector("#card1 img").src=path1;
       document.querySelector("#card1D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card1T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card1 .climaImg").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+cidade2)
    .then(function(response){        
        return response.json();
    })
    .then(function(response){       
       document.querySelector("#card2 h5").innerHTML=cidade2;
       document.querySelector("#card2 img").src=path2;
       document.querySelector("#card2D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card2T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card2 .climaImg").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+cidade3)
    .then(function(response){        
        return response.json();
    })
    .then(function(response){       
        document.querySelector("#card3 h5").innerHTML=cidade3;
       document.querySelector("#card3 img").src=path3;
       document.querySelector("#card3D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card3T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card3 .climaImg").src=response.current.weather_icons;
       
    })
    
    fetch("http://api.weatherstack.com/current?access_key="+access_key+"&query="+cidade4)
    .then(function(response){        
        return response.json();
    })
    .then(function(response){       
       document.querySelector("#card4 h5").innerHTML=cidade4;
       document.querySelector("#card4 img").src=path4;
       document.querySelector("#card4D").innerHTML=response.current.weather_descriptions[0];
       document.querySelector("#card4T").innerHTML=response.current.temperature+"ºC";
       document.querySelector("#card4 .climaImg").src=response.current.weather_icons;
       
    })
}




function modalPHP(){
    if(contador>0){
        for(let i=0;i<=4;i++){
            let elemento=document.querySelector("#select1");
            elemento.removeChild(elemento.lastChild);
            elemento=document.querySelector("#select2");
            elemento.removeChild(elemento.lastChild);
            elemento=document.querySelector("#select3");
            elemento.removeChild(elemento.lastChild);
            elemento=document.querySelector("#select4");
            elemento.removeChild(elemento.lastChild);
        }
        
    }

    let cidade1=document.querySelector("#card1 h5").textContent;
    let cidade2=document.querySelector("#card2 h5").textContent;
    let cidade3=document.querySelector("#card3 h5").textContent;
    let cidade4=document.querySelector("#card4 h5").textContent;
    document.querySelector("#select1 option[selected]").innerHTML=cidade1;
    document.querySelector("#select2 option[selected]").innerHTML=cidade2;
    document.querySelector("#select3 option[selected]").innerHTML=cidade3;
    document.querySelector("#select4 option[selected]").innerHTML=cidade4;    
    
    $.ajax({
        url:'presenter/ManterCidadeFavoritasPresenter.php',
        method:'GET'
    })
    .done(function(response){        
        response.forEach(function(cidade){
            let node1 = document.createElement("OPTION");
            node1.innerHTML=cidade.NAME;
            node1.value=cidade.NAME;
            
            let node2 = document.createElement("OPTION");
            node2.innerHTML=cidade.NAME;
            node2.value=cidade.NAME;
            
            let node3 = document.createElement("OPTION");
            node3.innerHTML=cidade.NAME;
            node3.value=cidade.NAME;
            
            let node4 = document.createElement("OPTION");
            node4.innerHTML=cidade.NAME;
            node4.value=cidade.NAME;
            if(cidade.NAME!=cidade1 && cidade.NAME!=cidade2 && cidade.NAME!=cidade3 && cidade.NAME!=cidade4){
                //console.log(cidade.NAME+cidade1+cidade2+cidade3+cidade4);
                document.querySelector("#select1").append(node1);
                document.querySelector("#select2").append(node2);
                document.querySelector("#select3").append(node3);
                document.querySelector("#select4").append(node4);
            }
            
        })
    });
    contador++;
    
}
