import { RegistrarseFormulario } from "../components/RegistrarseFormulario.js"

const Registrarse= ()=>
    `<div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div>
                <div class="card-body">
                    <h5 class="text-center">Registrar Usuario</h5>
                    ${RegistrarseFormulario()}
                    <div class="mt-3">
                        <a href="#/registrarse/">¿Ya tienes cuenta? Inicia sesion aqui.</a>
    
                    </div>
                </div>

            </div>
            

        </div>

    </div>
    
    
    
    `





export{Registrarse}