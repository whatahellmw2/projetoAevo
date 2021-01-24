<section  id="climasSection">
        <div class="container-fluid">
            <div class="row">
                
                <div class="col-xxl-3 col-md-6" id="card1" >
                    <div class="card">
                       
                        <div class="row g-0">
                            <div class="col-md-4">
                              <img src="resources/imagens/newyork.jpg" alt="imagem-clima" class="img-thumbnail cidadeImg">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">New York</h5>
                                <dl class="row"> 
                                    <dt class="col-sm-3 mt-3"><img src="#" class="climaImg"></dt>
                                    <dd class="col-sm-9 mt-3" id="card1D">Nublado</dd>
                                       
                
                                       <dt class="col-sm-3 mt-3" ><img src="resources/imagens/heat.png"></dt>
                                       <dd class="col-sm-9 mt-3" id="card1T">21º</dd>
                                </dl>
                               
                              </div>
                            </div>
                          </div>
                      </div>
                </div>
                
                <div class="col-xxl-3 col-md-6">
                    <div class="card" id="card2">
                        <div class="row g-0">
                            <div class="col-md-4">
                              <img src="resources/imagens/dubai.jpg" alt="imagem-clima" class="img-thumbnail cidadeImg">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">Dubai</h5>
                                <dl class="row"> 
                                    <dt class="col-sm-3 mt-3"><img src="#" class="climaImg"></dt>
                                    <dd class="col-sm-9 mt-3" id="card2D">Nublado</dd>
                                       
                
                                       <dt class="col-sm-3 mt-3" ><img src="resources/imagens/heat.png"></dt>
                                       <dd class="col-sm-9 mt-3" id="card2T">21º</dd>
                                </dl>
                               
                              </div>
                            </div>
                          </div>
                      </div>
                </div>
                
                <div class="col-xxl-3 col-md-6">
                    <div class="card" id="card3">
                        <div class="row g-0">
                            <div class="col-md-4">
                              <img src="resources/imagens/berlim.jpg" alt="imagem-clima"class="img-thumbnail cidadeImg">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">Berlim</h5>
                                <dl class="row"> 
                                    <dt class="col-sm-3 mt-3"><img src="#" class="climaImg"></dt>
                                    <dd class="col-sm-9 mt-3" id="card3D">Nublado</dd>
                                       
                
                                       <dt class="col-sm-3 mt-3" ><img src="resources/imagens/heat.png"></dt>
                                       <dd class="col-sm-9 mt-3" id="card3T">21º</dd>
                                </dl>
                                
                              </div>
                            </div>
                          </div>
                      </div>
                </div>
                
                <div class="col-xxl-3 col-md-6" >
                    <div class="card" id="card4">
                        <div class="row g-0">
                            <div class="col-md-4">
                              <img src="resources/imagens/saopaulo.jpg" alt="imagem-clima" class="img-thumbnail cidadeImg">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">Sao Paulo</h5>
                                <dl class="row"> 
                                    <dt class="col-sm-3 mt-3"><img src="#" class="climaImg"></dt>
                                    <dd class="col-sm-9 mt-3" id="card4D">Nublado</dd>
                                       
                
                                       <dt class="col-sm-3 mt-3" ><img src="resources/imagens/heat.png"></dt>
                                       <dd class="col-sm-9 mt-3" id="card4T">21º</dd>
                                </dl>
                                
                              </div>
                            </div>
                          </div>
                      </div>
                </div>
            </div>
            <div class="row" style="padding-left:10px;padding-right:10px;padding-top:10px">
                <button type="button" class="btn btn-secondary col-sm-2 offset-sm-10" data-bs-toggle="modal" data-bs-target="#modal" onclick="modalPHP();">Favoritos</button>
                <div class="modal" tabindex="-1" id="modal">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Favoritos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <form action="phpCookie.php">
                        <div class="modal-body">
                          <select class="form-select selectField" aria-label="Default select example" name="select1"id="select1">
                            <option selected></option>                        
                          </select>
                          <select class="form-select selectField" aria-label="Default select example" name="select2"id="select2">
                            <option selected></option>
                          
                          </select>
                          <select class="form-select selectField" aria-label="Default select example" name="select3"id="select3" >
                            <option selected></option>
                          
                          </select>
                          <select class="form-select selectField" aria-label="Default select example"name="select4" id="select4">
                          <option selected></option>

                          </select>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Sair</button>
                        
                            <button type="submit" class="btn btn-primary" >Salvar Favoritos</button>
                        
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>