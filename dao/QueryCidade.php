<?php
include_once('Conexao.php');
include_once('IDaoCidade.php');


class QueryCidade implements IDaoCidade {

    private $con;


    public function __construct()
    {
        $c= new Conexao();
        $this->con = $c->getConexao();
    }

    public function recuperarCidades(){
        $resultado = $this->con->query("SELECT * FROM cidade");

        $lista = array();

        while($cidade = $resultado->fetch(PDO::FETCH_OBJ)){
            $lista[] = $cidade;

        }
        return $lista;
    }


}