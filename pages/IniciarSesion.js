import { IniciarSesionFormulario } from "../components/IniciarSesionFormulario.js"

const IniciarSesion= ()=>
    `<div class="container mt-3 mb-3">
        <div class="row justify-content-md-center">
            <div>
                <div class="card-body">
                    <h5 class="text-center">Iniciar Sesión</h5>
                    ${IniciarSesionFormulario()}
                    <div class="mt-3">
                        <a href="#/iniciarsecion/">¿No tienes una cuenta? Registrate aqui..</a>
    
                    </div>
                </div>

            </div>
            

        </div>

    </div>
    
    
    
    `





export {IniciarSesion}