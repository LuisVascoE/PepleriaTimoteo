<?php

class conexion{

    private $user="root";
    private $pass="";
    
    function conectar(){
        try{
            $pdo=new PDO('mysql:host=localhost;dbname=tienda', $this->user, $this->pass);
        
            echo "<script>alert('Conexion correcta :D')</script>";
        }catch(PDOException $error){

        
            echo '<script type="text/javascript">alert("No me pude conectar :c'. $error->getMessage() . '")</script>';

        }
    

    }
}
$nuevaconexion = new conexion();
$nuevaconexion->conectar();
?>