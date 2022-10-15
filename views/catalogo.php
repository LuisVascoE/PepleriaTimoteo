<?php
include '../Global/conexion.php';
include '../Global/config.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Pepleria Timoteo</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Acompañando a nuestros clientes desde tiempos Inmemorables">
    <meta name="keywords" content="Utiles Escolares y demas">
    <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon" >
    
    <link rel="stylesheet" href="../css/estilos.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
</head>
<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <img class="mi-nav-logo" src="../img/favicon.ico" alt="">
        <a class="navbar-brand" href="../index.php">Pepleria Timoteo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="../index.php">Home <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="../views/catalogo.php">Catálogo</a>
            <a class="nav-link" href="../views/carrito.php">Carrito<i class="bi bi-cart4"></i></a>
            
            
          </div>
        </div>
      </nav>

      <div class="jumbotron jumbotron-fluid ">
        <div class="container">
          <h1 class="display-4">Catálogo</h1>
          <br>
          <br>
          <p class="lead">Ofreciendo lo mejor para nuestro Clientes</p>
        </div>
      </div>

      <br>
      <br>
      <br>


      <div class="container" >
        <br>
        <div class="alert alert-success">
          Pantalla de mensaje...
          <a href="#" class="badge badge-success">Ver Carrito</a>
        </div>

        <div class="row justify-content-center">

          <div class="card" style="width: 18rem;">
              <img src="/img/Lapiceros.jpg" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
              <h5 class="card-title">BOLÍGRAFO PAPER MATE INK JOY X 8 UDS.</h5>
              <p class="card-text">Marca: Papermare Cod. 525999 PRECIO ONLINE:
                $52.600</p>
              
              <a href="#" class="btn btn-primary" name="btnAccion" value="Agregar"  type="submit"><i class="bi bi-cart4"></i>Añadir al Carrito</a>
              </div>
          </div>
  
          <div class="card" style="width: 18rem;">
              <img src="/img/morral-para-portatil-xtb-220-15-6-xtech-durham-azul-798302230866.jpg" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
              <h5 class="card-title">MORRAL XTECH DURHAM XTB-220 PARA PORTÁTIL DE 15.6", AZUL</h5>
              <p class="card-text">Marca: xtech Cod. 644197 PRECIO ONLINE:
                $74.900</p>
              
              <a href="#" class="btn btn-primary" name="btnAccion" value="Agregar"  type="submit"><i class="bi bi-cart4"></i>Añadir al Carrito</a>
              </div>
          </div>
  
          <div class="card" style="width: 18rem; ">
              <img src="/img/set-de-borradores-para-arte-x-4-piezas-9328577011870.webp" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
              <h5 class="card-title">SET DE BORRADORES PARA ARTE X 4 PIEZAS</h5>
              <p class="card-text">Marca: Mont marte Cod. 635568 PRECIO ONLINE:
                $22.900 </p>
             
              <a href="#" class="btn btn-primary name="btnAccion" value="Agregar"  type="submit"><i class="bi bi-cart4"></i>Añadir al Carrito</a>
              </div>
          </div>
  
          
          <div class="card" style="width: 18rem;">
              <img src="/img/cuaderno-105-rayado-de-80-hojas-argollado-academico-surtido--7702111589445.webp" class="card-img-top img-fluid" alt="...">
              <div class="card-body">
              <h5 class="card-title">CUADERNO ACADÉMICO 105 RAYADO DE 80 HOJAS ARGOLLADO (SURTIDO)</h5>
              <p class="card-text">Marca: Norma Cod. 630908 PRECIO ONLINE:
                $25.500</p>
             
              
              <a href="#" class="btn btn-primary" name="btnAccion" value="Agregar"  type="submit"><i class="bi bi-cart4"></i>Añadir al Carrito</a>
              </div>
          </div>




      </div>



      <br>
      <br>
      <br>



      

    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>


      <footer>
        <div class="row">
           

            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h4 class="mio-acercade"><img src="/img/favicon.ico" alt="mio-arcade">Pepelria Timoteo</h4>
                        <p class="mio-arcade">Somos más que una papelería, aquí también podrás encontrar portafolio de: Hogar, tecnología, juguetería, electromenores, mascotas, y muchas más... Tenemos envíos a todo Colombia. C</p>
                    </div>
                </div>
            </div>

            <address>
                <h5>Contactanos</h5>
                <p><i class="bi bi-geo-alt-fill"></i>Carrera 28A 7-25 CO</p>
                <p><i class="bi bi-phone"></i>+57 315 820 6048</p>
                <p><i class="bi bi-envelope"></i>pepleriatimoteo@hotmail.com</p>

            </address>



            </div>
      </footer>















    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    <script src="../js/dinamicas.js"></script>

</body>
</html>