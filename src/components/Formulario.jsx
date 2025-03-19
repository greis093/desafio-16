import { useEffect, useState } from "react"

const Formulario = ( 
 { agregarEmpleado,
  empleadosAEditar, 
  setEmpleadosAEditar,
  editarEmpleados} ) => {
  
  

  const dataFormularioInicial = {
    id: null,
    nombre: '',
    apellido: '',
    edad: '',
    puesto:'',
    foto:''
  }

  const [dataFormulario, setDataFormulario] = useState(dataFormularioInicial)

  useEffect(() => {
    console.log('Cambió el empleadoAEditar')
    /* {} -> true -> Que si se esta editando */
    /* null -> false -> Que no se está editando */

    empleadosAEditar ? setDataFormulario(empleadosAEditar) : setDataFormulario(dataFormularioInicial)
  }, [empleadosAEditar])
  

  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)

    /* debugger */

    const dataActualizada = {
      ...dataFormulario,
      [e.target.name]: e.target.value
    }

    setDataFormulario(dataActualizada)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    //console.log(dataFormulario)

    if ( dataFormulario.id === null ) {
      agregarEmpleado(dataFormulario)
    } else {
      editarEmpleados(dataFormulario)
    }

    handleReset()
  }

  const handleReset = () => {
    console.log('Reseteando...')
    setDataFormulario(dataFormularioInicial)
    setEmpleadosAEditar(dataFormularioInicial)
  }


  return (
    <>
      <h2 className="text-2xl font-semibold my-4">
        Formulario de { empleadosAEditar ? 'edición' : 'carga'} de empleados
      </h2>

      <div className="max-w-lg mb-4">
        <form className="bg-white border rounded-lg p-6" onSubmit={handleSubmit}>
          {/* Campo Nombre */}
          <label htmlFor="lbl-nombre" className="block mb-2 text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input 
            type="text" 
            id="lbl-nombre"
            placeholder="Ingresa el nombre"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            name="nombre"
            onChange={handleChange}
            value={dataFormulario.nombre}
          />
          {/* Campo Apellido */}
          <label htmlFor="lbl-apellido" className="block mb-2 text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input 
            type="text" 
            id="lbl-apellido"
            placeholder="Ingresa el apellido"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            name="apellido"
            onChange={handleChange}
            value={dataFormulario.apellido}
          />
           {/* Campo Edad */}
          <label htmlFor="lbl-edad" className="block mb-2 text-sm font-medium text-gray-700">
            Edad
          </label>
          <input 
            type="text" 
            id="lbl-edad"
            placeholder="Ingresa la edad"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            name="edad"
            onChange={handleChange}
            value={dataFormulario.edad}
          />
          {/* Campo Puesto */}
          <label htmlFor="lbl-puesto" className="block mb-2 text-sm font-medium text-gray-700">
            Puesto
          </label>
          <input 
            type="text" 
            id="lbl-puesto"
            placeholder="Ingresa el puesto"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            name="puesto"
            onChange={handleChange}
            value={dataFormulario.puesto}
          />
          {/* Campo Foto */}
          <label htmlFor="lbl-foto" className="block mb-2 text-sm font-medium text-gray-700">
            Foto
          </label>
          <input 
            type="text" 
            id="lbl-foto"
            placeholder="Ingresa la foto"
            className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            name="foto"
            onChange={handleChange}
            value={dataFormulario.foto}
          />

          <div className="flex justify-between">
            <button
              type="submit"
              className={`px-4 py-2 ${empleadosAEditar ? 'bg-yellow-500' : 'bg-green-500'} text-white rounded-lg ${empleadosAEditar ? 'hover:bg-yellow-700' : 'hover:bg-green-700'}  cursor-pointer`}
            >
                { empleadosAEditar ? 'Editar' : 'Crear' }
            </button>
            <button
              type="reset"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
              onClick={handleReset}
            >
                Reset
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Formulario