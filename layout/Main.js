const Main= ()=>{

    const vista= 
    `
    <div class="jumbotron jumbotron-fluid ">
        <div class="container">
          <h1 class="display-4">Pepleria Timoteo</h1>
          <br>          
          <p class="lead">Acompañando a nuestros clientes desde tiempos Inmemorables</p>
        </div>
      </div>

      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
         
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./assets/img/borrador.jpg" class="d-block w-30 rounded mx-auto d-lg-block mi-img-carrusel" alt="borrador">
          </div>
          <div class="carousel-item">
            <img src="./assets/img/cuerdernos.jpg" class="d-block w-30 rounded mx-auto d-lg-block mi-img-carrusel" alt="cuerderno">
          </div>
          <div class="carousel-item">
            <img src="./assets/img/Lapiceros.jpg" class="d-block w-25 rounded mx-auto d-lg-block mi-img-carrusel" alt="Lapiceros">
          </div>
          <div class="carousel-item">
            <img src="./assets/img/morral-para-portatil-xtb-220-15-6-xtech-durham-azul-798302230866.jpg" class="d-block w-25 rounded mx-auto d-lg-block mi-img-carrusel" alt="morral">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
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

      <div class="row justify-content-center">

        <div class="card" style="width: 18rem;">
            <img src="./assets/img/Lapiceros.jpg" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
            <h5 class="card-title">BOLÍGRAFO PAPER MATE INK JOY X 8 UDS.</h5>
            <p class="card-text">Marca: Papermare Cod. 525999</p>
            
            </div>
        </div>

        <div class="card" style="width: 18rem;">
            <img src="./assets/img/morral-para-portatil-xtb-220-15-6-xtech-durham-azul-798302230866.jpg" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
            <h5 class="card-title">MORRAL XTECH DURHAM XTB-220 PARA PORTÁTIL DE 15.6", AZUL</h5>
            <p class="card-text">Marca: xtech Cod. 644197</p>
            
            </div>
        </div>

        <div class="card" style="width: 18rem; ">
            <img src="./assets/img/set-de-borradores-para-arte-x-4-piezas-9328577011870.webp" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
            <h5 class="card-title">SET DE BORRADORES PARA ARTE X 4 PIEZAS</h5>
            <p class="card-text">Marca: Mont marte Cod. 635568</p>
           
            </div>
        </div>

        
        <div class="card" style="width: 18rem;">
            <img src="./assets/img/cuaderno-105-rayado-de-80-hojas-argollado-academico-surtido--7702111589445.webp" class="card-img-top img-fluid" alt="...">
            <div class="card-body">
            <h5 class="card-title">CUADERNO ACADÉMICO 105 RAYADO DE 80 HOJAS ARGOLLADO (SURTIDO)</h5>
            <p class="card-text">Marca: Norma Cod. 630908</p>
            
            </div>
        </div>

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
      


      <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <p>
                    <h3 class="correcto"><img src="./assets/img/correcto.png"  alt="correcto"></h3>
                    <p class="lead mio-correcto">Todos los productos son originales y de alta calidad.</p>
                
                </p>
                

            </div>
            <div class="col-sm-3">
                <p>
                    <h3 class="envio-paquetes"><img src="./assets/img/entrega-de-paquetes.png"  alt="envio-paquetes"></h3>
                    <p class="lead mio-paquetes">Envíos gratis en productos seleccionados.</p>
                
                </p>

            </div>

            <div class="col-sm-3">
                <p>
                    <h3 class="mio-pago"><img src="./assets/img/devolucion-de-dinero.png"  alt="mio-pago"></h3>
                    <p class="lead mio-pago">Tenemos múltiples formas de pago.</p>
                
                </p>

            </div>

            <div class="col-sm-3">
                <p>
                    <h3 class="mio-proteccion"><img src="./assets/img/proteger.png"  alt="mio-proteccion"></h3>
                    <p class="lead mio-proteccion">Tu compra protegida hasta que la recibes.</p>
                
                </p>

            </div>


        </div>
        
      </div>
      <br>
      <br>
      <br>
      <br>
  
    
    `

    return vista
}

export {Main}