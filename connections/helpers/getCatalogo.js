const API="https://0ccd2c43-f6ee-4f8d-b61c-a24ae6eff339.mock.pstmn.io"

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