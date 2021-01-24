<?php
include_once('../dao/QueryCidade.php');
header('Content-Type: application/json');


class ManterCidadeFavoritasPresenter{
    public function exbibirModal(){
        $query = new QueryCidade();
        $teste = $query->recuperarCidades();
        echo json_encode($teste);
    }    
}

if(isset($_POST['cidades'])){
   // $presenter=new ManterCidadeFavoritasPresenter();
   // $presenter->getCookie($_POST['cidades']);
}else{
    $presenter=new ManterCidadeFavoritasPresenter();
    $presenter->exbibirModal();
}
