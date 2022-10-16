import { CatalogoCards } from "../components/CatalogoCard.js"
import getCatalogo from "../connections/helpers/getCatalogo.js"



const Catalogo= async()=>{ 
  const catalogo= await getCatalogo()

  return(
  `
    
    <div class="jumbotron jumbotron-fluid ">
    <div class="container">
      <h1 class="display-4">Catálogo</h1>
      <br>
      <br>
      <p class="lead">Ofreciendo lo mejor para nuestro Clientes</p>
    </div>
    <div class="container mt-4 mb-4">
      <div class="row justify-content-md-center">
        <div class="col col-sm-12 col-md-8 col-lg-6">
          <div class="card-body">

              ${

                    catalogo.map(catalogo=>
                    CatalogoCards(catalogo, true )
              

                  )
                }

           </div>      
        </div>
      </div>  
    </div>
  </div>

  <br>
  <br>
  <br>




    <div class="row justify-content-center">


    
    
    
    
    





  </div>



  <br>
  <br>
  <br>



  

</div>

    `)



}


export{Catalogo}