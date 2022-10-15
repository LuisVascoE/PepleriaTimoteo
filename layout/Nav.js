const Nav= ()=>{

    const vista= 
    `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <img class="mi-nav-logo" src="./assets/img/favicon.ico" alt="">
        <a class="navbar-brand" href="./index.html">Pepleria Timoteo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-link" href="../pages/catalogo.js">Catálogo</a>
            <a class="nav-link" href="../pages/carrito.js">Carrito<i class="bi bi-cart4"></i></a>
            
           
          </div>
        </div>
      </nav>
    
    `

    return vista
}

export {Nav}