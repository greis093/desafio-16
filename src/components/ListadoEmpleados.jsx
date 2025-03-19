import Fila from "./Fila";
import Spinner from "./Spinner";

const ListadoEmpleados = (
  {empleados,
  borrarEmpleado,
  setEmpleadosAEditar,}
) => {
  return (
    <>
      {empleados ? (
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Apellido</th>
              <th className="px-6 py-3">Edad</th>
              <th className="px-6 py-3">Puesto</th>
              <th className="px-6 py-3">Foto</th>
            </tr>
          </thead>
          <tbody>
           {empleados.map( (empleado)=>(
            <Fila 
            empleados={empleado}
            key={empleado.id}
            borrarEmpleado={borrarEmpleado}
            setEmpleadosAEditar={setEmpleadosAEditar}
            />
           ))}
          </tbody>
        </table>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default ListadoEmpleados;
