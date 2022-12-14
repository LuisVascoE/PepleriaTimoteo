const Nav= ()=>{

    const vista= 
    `
    <nav class=" navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
        <img class="mi-nav-logo" src="./assets/img/favicon.ico" alt="">
        <a class="navbar-brand" href="./index.html">Pepleria Timoteo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#/catalogo/">Catálogo <i class="bi bi-book"></i></a>
            <a class="nav-link" href="#/carrito/">Carrito<i class="bi bi-cart4"></i></a>
            <a class="nav-link" href="#/iniciarsesion/">Iniciar Sesión <i class="bi bi-box-arrow-in-right"></i></a>
            <a class="nav-link" href="#/registrarse/">Registrarse <i class="bi bi-person-plus"></i></a>
            <li class="nav-item dropdown mi-nav">
        <a class="nav-link dropdown-toggle ml-auto text-righ" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
          Usuario
        </a>
        <div class="dropdown-menu text-righ">
          <a class="dropdown-item" href="#">Cuenta</a>
          <a class="dropdown-item" href="#">Cerrar sesion</a>
        
        </div>
      </li>
          </div>
          
        </div>
        
      </nav>
    
    `

    return vista
}

export {Nav}