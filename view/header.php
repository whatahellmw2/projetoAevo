<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset='utf-8'>    
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link  rel="stylesheet" href="myCSS.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    
    
</head>
<body>
    <header class="container-fluid" id="header">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-1">
                <img src="resources/imagens/logo.png" style="width: 70px;height: 70px;">
            </div>          
            <form class="col-md-5"id="formClima" >                      
                <div class="form-control-lg">                
                    <div class="input-group">                    
                        <input class="form-control " type="text" name="cidade" placeholder="procure uma cidade" id="nomeCidade" style="min-width: 150px;">
                        <span class="input-group-btn">
                            <button class="btn btn-primary"type="submit">Buscar</button>
                        </span>
                    </div>                
                </div>            
            </form>
            <div class="col-md-3"></div>
        </div>
        
    </header>