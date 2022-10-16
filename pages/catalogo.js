const Catalogo= ()=>{
    const vista=
    `
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
          <img src="../assets/img/Lapiceros.jpg" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
          <h5 class="card-title">BOLÍGRAFO PAPER MATE INK JOY X 8 UDS.</h5>
          <p class="card-text">Marca: Papermare Cod. 525999 PRECIO ONLINE:
            $52.600</p>
          
          <a href="#" class="btn btn-primary" name="btnAccion" value="Agregar"  type="submit"><i class="bi bi-cart4"></i>Añadir al Carrito</a>
          </div>
      </div>

      <div class="card" style="width: 18rem;">
          <img src="../assets/img/morral-para-portatil-xtb-220-15-6-xtech-durham-azul-798302230866.jpg" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
          <h5 class="card-title">MORRAL XTECH DURHAM XTB-220 PARA PORTÁTIL DE 15.6", AZUL</h5>
          <p class="card-text">Marca: xtech Cod. 644197 PRECIO ONLINE:
            $74.900</p>
            <a href="#" class="btn btn-primary" name="btnAccion" value="Agregar"  type="submit"><i class="bi bi-cart4"></i>Añadir al Carrito</a>



        
          
          </div>
      </div>

      <div class="card" style="width: 18rem; ">
          <img src="../assets/img/set-de-borradores-para-arte-x-4-piezas-9328577011870.webp" class="card-img-top img-fluid" alt="...">
          <div class="card-body">
          <h5 class="card-title">SET DE BORRADORES PARA ARTE X 4 PIEZAS</h5>
          <p class="card-text">Marca: Mont marte Cod. 635568 PRECIO ONLINE:
            $22.900 </p>
         
          <a href="#" class="btn btn-primary name="btnAccion" value="Agregar"  type="submit"><i class="bi bi-cart4"></i>Añadir al Carrito</a>
          </div>
      </div>

      
      <div class="card" style="width: 18rem;">
          <img src="../assets/img/cuaderno-105-rayado-de-80-hojas-argollado-academico-surtido--7702111589445.webp" class="card-img-top img-fluid" alt="...">
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
    `

    return vista

}


export{Catalogo}