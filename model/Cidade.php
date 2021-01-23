<?php 

class Cidade{
    private $name;
    private $imgPath;


    public function __construct($name, $imgPath)
    {
        $this->name = $name;
        $this->imgPath = $imgPath;
    }


    public function getName()
    {
        return $this->name;
    }


    public function setName($name)
    {
        $this->name = $name;
    }


    public function getImgPath()
    {
        return $this->imgPath;
    }


    public function setImgPath($imgPath)
    {
        $this->imgPath = $imgPath;
    }


}