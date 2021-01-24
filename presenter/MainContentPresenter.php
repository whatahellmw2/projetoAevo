<?php
include('dao/QueryCidade.php');

class MainContentPresenter
{
    public function exbirpagina(){        
    require_once 'header.php';
    require_once 'main.php';
    require_once 'section.php';
    require_once 'footer.php';   
    }
    public function getCookie(){
        if(isset($_COOKIE['cidadesFavoritas'])){
            $values = json_decode($_COOKIE['cidadesFavoritas']);
            $query = new QueryCidade();
            $cidades = $query->recuperarCidades();
            
            foreach($cidades as $cidade){
                if($cidade->NAME==$values[0]){
                    $path0=$cidade->IMG_PATH;
                }
                if($cidade->NAME==$values[1]){
                    $path1=$cidade->IMG_PATH;
                }
                if($cidade->NAME==$values[2]){
                    $path2=$cidade->IMG_PATH;
                }
                if($cidade->NAME==$values[3]){
                    $path3=$cidade->IMG_PATH;
                }
            }
            echo "<script>window.onload=preencherInicio("."'".$values[0]."','".$path0."','".$values[1]."','".$path1."','".$values[2]."','".$path2."','".$values[3]."','".$path3."');</script>";
            
        }else{
            echo '<script>window.onload=preencherInicio("'."New York".'","'."Dubai".'","'."Berlim".'","'."Sao Paulo".'");</script>';
        }
    }
}