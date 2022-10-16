import { AgregarAlCarritoBoton } from "./AgregarAlCarritoBoton.js"
const CatalogoCards= (catalogo, usuario)=>

`

    <div class="card mt-3 mb-3">
        <div class="card-header mi-card">
            <div>
                <div>Productos Vigentes</div>
            </div>
            ${usuario ?
            `
            <div>
                ${AgregarAlCarritoBoton()}
            </div>`
            :""
            }
        </div>
        
        <div class=" card-body">
            <div class="card-title">
                <a href="/pagina/${catalogo.id}">
                ${catalogo.producto}
                </a>
            </div>

            <div class="card-text">
                Marca: ${catalogo.marca}


            </div>
            <div class="card-text">
                Codigo: ${catalogo.codigo},


            </div>

        </div>


    </div>


`





export {CatalogoCards}