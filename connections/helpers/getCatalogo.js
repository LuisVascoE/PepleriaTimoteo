const API="https://b1458de2-85bc-4b7c-8629-a639e2617b3e.mock.pstmn.io"

export default async (id)=>{


    const apiUrl= (id) ? `${API}${id}` : API

    try{

        
        const response= await fetch(apiUrl)
        const data= await response.json()

        return data

    }catch(error){
        console.log("Error Fetch", error)

    }

}