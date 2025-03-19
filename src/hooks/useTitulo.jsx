import { useEffect } from "react"

const useTitulo = (titulo) => {

    useEffect(() => {   
        document.title = `Educación IT - ${titulo}`
    }, [])
  
}

export default useTitulo