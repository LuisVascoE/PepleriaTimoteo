
import {Nav} from "../layout/Nav.js"
import{Main} from "../layout/Main.js"
import{Footer} from "../layout/Footer.js"


const App= ()=>{

    const header= document.querySelector("header")
    const main=document.querySelector("main")
    const footer=document.querySelector("footer")

    header.innerHTML=Nav()
    main.innerHTML=Main()
    footer.innerHTML=Footer()


}

export {App}