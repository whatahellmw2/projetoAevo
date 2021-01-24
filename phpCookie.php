<?php
$cidades=array($_REQUEST['select1'],$_REQUEST['select2'],$_REQUEST['select3'],$_REQUEST['select4']);
if(isset($_COOKIE['cidadesFavoritas'])){
    setcookie('cidadesFavoritas',null,time()+(60*60*24),"localhost");
    setcookie('cidadesFavoritas',json_encode($cidades),time()+(60*60*24),"localhost");
}else{
    setcookie('cidadesFavoritas',json_encode($cidades),time()+(60*60*24),"localhost");
}

header('Location: index.php');