import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../components/Spinner"

const EmpleadosDetalle = () => {

  const { id } = useParams()
  
  console.log(id)

  const [empleadosDetalle, setEmpleadosDetalle] = useState(null) // empleadoDetalle = {}

  useEffect(() => {
    
    getOne(id)
    
  }, [])

  const getOne = async (id) => {

    // Verbo Get
    // http://localhost:8080/empleados/id

    const urlGetOne = import.meta.env.VITE_BACKEND + id

    try {
      const res = await fetch(urlGetOne)

      if (!res.ok) {
        throw new Error('No se pudo obtener el producto')
      }

      const data = await res.json()
      setEmpleadosDetalle(data)
      
    } catch (error) {
      console.error(error)
    }

  }
  

  return (
    <>
      <h1>Empleados detalle</h1>

      {
        empleadosDetalle ? 
          (
            <>
              <h2>El nombre del empleado: {empleadosDetalle.nombre}</h2>
              <p>Apellido del empleado es: {empleadosDetalle.apellido}</p>
              <p>La edad: {empleadosDetalle.edad}</p>
              <p>El puesto: {empleadosDetalle.puesto}</p>
              <p>La foto:</p>
              <img  src={empleadosDetalle.foto} alt={empleadosDetalle.nombre} style={{width:'70px'}}/>
            </>
          ) :
          (
            <Spinner />
          )

      }
    </>
  )
}

export default EmpleadosDetalle