const AgregarAlCarritoBoton= ()=>{
    return (
        `
        <a href="" class="btn btn-primary btn-sm me-2" data-toggle="modal" data-target="#Alerta">
            Agregar Al carrito<i class="bi bi-cart-plus"></i>
        </a>
  <!-- Modal -->
  <div class="modal fade" id="Alerta" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Agregra al carrito</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ¿Deseas agregar este articulo al carrito?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
          <button type="button" class="btn btn-primary">Si</button>
        </div>
      </div>
    </div>
  </div>

    
        `


    )




}


export {AgregarAlCarritoBoton}