
import {Nav} from "../layout/Nav.js"
import{Footer} from "../layout/Footer.js"
import{PaginaPrincipal} from "../pages/PaginaPrincipal.js"
import { Registrarse } from "../pages/Registrarse.js"
import { Error404 } from "../pages/Error404.js"
import { Catalogo } from "../pages/Catalogo.js"
import getHash from "../connections/helpers/getHash.js"
import resolverRuta from "../connections/helpers/resolverRuta.js"
import { IniciarSesion } from "../pages/IniciarSesion.js"


const Rutas={
    "/":PaginaPrincipal,
    "/catalogo": Catalogo,
    "/registrarse":Registrarse,
    "/iniciarsesion":IniciarSesion,


}

const App= async ()=>{

    const header= document.querySelector("header")
    const main=document.querySelector("main")
    const footer=document.querySelector("footer")

    header.innerHTML=Nav()
    footer.innerHTML= Footer()


    let ruta= await resolverRuta(getHash())
    let pagina= (Rutas[ruta]) ?Rutas[ruta] : Error404 


    main.innerHTML= await pagina()


}

export {App}