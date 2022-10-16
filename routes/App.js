
import {Nav} from "../layout/Nav.js"
import{Footer} from "../layout/Footer.js"

const Rutas={
    


}

const App= ()=>{

    const header= document.querySelector("header")
    const main=document.querySelector("main")
    const footer=document.querySelector("footer")

    header.innerHTML=Nav()
    footer.innerHTML=Footer()



    let pagina= (Rutas["/perfil"])


    main.innerHTML= pagina()


 


    
    




}

export {App}