// rafce
import { useEffect, useState } from "react"

import Formulario from "./components/Formulario"
import ListadoEmpleados from "./components/ListadoEmpleados"

// https://es.react.dev/learn/thinking-in-react

const App = () => {

  const [empleados, setEmpleados] = useState(null)
  const [empleadosAEditar, setEmpleadosAEditar] = useState()

  useEffect(() => { /* el callback del useEffect no puede ser asincronico (no puede retonar una Promise) */
    getAllEmpleados()
  }, []) /* Solo se ejecuta una vez (Cuando el componente se monta) */
    
  const getAllEmpleados = async () => {
    

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND)

      if (!res.ok) {
        throw new Error('No se pudo hacer la petición')
      }

      const data = await res.json()

      console.log(data)
      setEmpleados(data)

    } catch (error) {
      //console.error(error)
      console.error(error.message)
    }

  }

  const agregarEmpleado = async (nuevoEmpleado) => {
    // ! 1. Agrego el empleado en el backend (El backend me va a devolver el id)
    //console.log(nuevoEmpleado)
    nuevoEmpleado.id = Number(nuevoEmpleado.id)
    delete nuevoEmpleado.id // borrar la propiedad 'id' del objeto nuevoEmpleado 
    console.log('este es nuevo empleado',nuevoEmpleado) 
    try {
      const res = await fetch(import.meta.env.VITE_BACKEND, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(nuevoEmpleado)
      })

      if (!res.ok) {
        throw new Error('No se pudo hacer la petición')
      }

      const empleadoAgregadoEnBackend = await res.json()
      console.log(empleadoAgregadoEnBackend)

      // ! 2. Es modificar el estado basado en el empleado agregado en el backend

      const nuevoEstadoEmpleado = [...empleados, empleadoAgregadoEnBackend]
      console.log(nuevoEstadoEmpleado) // array nuevo = arrayViejo + nuevoProducto
      setEmpleados(nuevoEstadoEmpleado)

    } catch (error) {
      //console.error(error)
      console.error(error.message)
    }

    
  }

  const editarEmpleados = async (empleadoEditado) => {

    // ! 1. Hacer la petición para guardar el producto editado
    // https://localhost:8080/empleados/id | Verbo PUT
    const urlEditar = import.meta.env.VITE_BACKEND + empleadoEditado.id // https://localhost:8080/empleado/id 
    
    try {
      empleadoEditado.edad = Number(empleadoEditado.edad)

      const res = await fetch(urlEditar, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(empleadoEditado)
      })

      if (!res.ok) {
        throw new Error('No se pudo hacer la petición')
      }

      const empleadoEditadoBackend = await res.json()
      console.log(empleadoEditadoBackend)
      
      // ! 2. Avistarle a React que cambió algo dentro del array de productos
      
      const nuevoEstadoEmpleado = empleados.map(prod => prod.id === empleadoEditado.id ? empleadoEditado : prod)
      console.log(nuevoEstadoEmpleado) // nuevo estado con todos los productos y el productoEditado
      
      setEmpleados(nuevoEstadoEmpleado)
    } catch (error) {
      console.error(error)
    }

  }

  const borrarEmpleados = async (id) => {
    console.log(id)
    console.log(empleados)
    // ! 1. Eliminar el producto por id del banckend
    // http://localhost:8080/productos/id | método DELETE

    const urlBorrado = import.meta.env.VITE_BACKEND + id // http://localhost:8080/productos/id 
    try {
      const res = await fetch(urlBorrado, {
        method: 'DELETE'
      })
  
      if (!res.ok) {
        throw new Error('No se pudo hacer la petición')
      }

      const empleadoEliminadoDelBackend = await res.json()
      console.log(empleadoEliminadoDelBackend)

    } catch (error) {
      console.error(error)
    }

    // ! 2. Actualizar el estado de la aplicación react para que el producto eliminado deje de estar en la lista
    const nuevoEstadoEmpleados = empleados.filter( prod => prod.id !== id)
    console.log(nuevoEstadoEmpleados)
    setEmpleados(nuevoEstadoEmpleados)

  }

  return (
    <>
      <h1 className="text-4xl my-5">CRUD Empleados</h1>
      <hr />
      <Formulario 
        agregarEmpleado={agregarEmpleado} 
        empleadosAEditar={empleadosAEditar}
        setEmpleadosAEditar={setEmpleadosAEditar}
        editarEmpleados={editarEmpleados}
      /> {/* hijo1  */}
      <ListadoEmpleados 
        empleados={empleados} 
        borrarEmpleados={borrarEmpleados} 
        setEmpleadosAEditar={setEmpleadosAEditar}
      /> {/* hijo2 */}
    </>
  )
}

export default App