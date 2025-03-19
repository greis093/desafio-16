import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Fila = (
 {empleados, 
  borrarEmpleado, 
  setEmpleadosAEditar}
) => { 

  // El useNavigate, me devuelve una referencia de una función
  const navigate = useNavigate()

  const handleEliminar = (id) => {
    console.log(id)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        borrarEmpleado(id)
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else {
        Swal.fire({
          title: "No lo borraste!",
          text: "El empleado no se borro",
          icon: "info"
        });
      }
    });

  }

  const handleEditar = (empleados) => {
    console.log(empleados)
    setEmpleadosAEditar(empleados)
  }

  const handleVer = (id) => {
    console.log(id)
    navigate(`/empleados/detalle/${id}`)
  }

  return (
    <tr className="bg-white border-b border-gray-200">
      <th className="px-6 py-4">{empleados.nombre}</th>
      <td className="px-6 py-4">{empleados.apellido}</td>
      <td className="px-6 py-4">{empleados.edad}</td>
      <td className="px-6 py-4">{empleados.puesto}</td>
      <td className="px-6 py-4">
        <img src={empleados.foto} alt={empleados.nombre} style={{width:'40px'}}/>
        </td>
      <td className="px-6 py-4">
        <button
          onClick={() => handleVer(empleados.id)}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2">
            Ver
        </button>
      
        <button
          onClick={() => handleEditar(empleados)}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2">
            Editar
        </button>
        <button
          onClick={() => handleEliminar(empleados.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2">
            Borrar
        </button>
      </td>
    </tr>
  )
}

export default Fila