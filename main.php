
    <main class="container-fluid">
        
        <div class="row">

            <div class="col-md-2" >
            </div>
           
            <div class="col-md-8 border rounded-top" id="principal"  style="background-color: white;background-image: url(resources/imagens/Snowflake.png); background-position: center;background-repeat: no-repeat;background-size: contain;">
                <div style="background-color:rgba(255, 255, 255,0.90);height: 100%;">
                    
                    <div class="row" style="background-color:rgba(223, 209, 232,0.98);">
                        <nav>
                            <ul class="nav nav-tabs justify-content-center nav-fill nav-justified shadow-sm">
                                <li class="nav-item" id="atual" onclick="mudarTab(this.id);">
                                    <a class="nav-link text-reset active" href="#">
                                        Hoje
                                    </a>
                                </li>
                                <li class="nav-item" id="previsao" onclick="mudarTab(this.id);">                                    
                                    <a class="nav-link text-reset disabled" href="#">
                                        Previsão para os próximos dias
                                    </a>
                                </li>                                
                            </ul>
                        </nav>
                    </div>
                    
                    <div class="row" id="dadosClima">                    
                        <div id="imagemeLocalizacao"></div>
                            <img class ="col-sm-3" src="#" class="img-thumbnail" alt="imagem do clima" style="max-height:150px;max-width:150px;float:left">
                            <div class="col-sm-9" style="padding-top: 7%;">
                                <h4 style="text-align: center;"><span id="pais">País, </span><span id="cidade">Cidade, </span><span id="regiao">Região</span></h4>
                            </div>
                    </div>
                        
                    <dl class="row" style="padding-top: 30px;">
                        
                        <dt class="col-sm-3 mt-3">Tempo</dt>
                        <dd class="col-sm-9 mt-3" id="descricao">A description list is perfect for defining terms.</dd>
                        

                        <dt class="col-sm-3 mt-3" >Temperatura</dt>
                        <dd class="col-sm-9 mt-3" id="temperatura">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Umidade</dt>
                        <dd class="col-sm-9 mt-3" id="umidade">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Precipitação</dt>
                        <dd class="col-sm-9 mt-3" id="precip">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Visibilidade</dt>
                        <dd class="col-sm-9 mt-3" id="visibilidade">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Velocidade do Vento</dt>
                        <dd class="col-sm-9 mt-3" id="velocidade">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Direção</dt>
                        <dd class="col-sm-9 mt-3" id="direcao">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Pressão</dt>
                        <dd class="col-sm-9 mt-3" id="pressao">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Índice UV</dt>
                        <dd class="col-sm-9 mt-3" id="uv">A description list is perfect for defining terms.</dd>

                        <dt class="col-sm-3 mt-3">Horário da Observação</dt>
                        <dd class="col-sm-9 mt-3" id="time">A description list is perfect for defining terms.</dd>
                    </dl>
                </div>
                
                   
            </div>             
            
            <div class="col-md-2">
            </div>

        </div>      
    </main>