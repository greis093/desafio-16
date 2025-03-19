import {  createContext, useState } from "react";

// ! 1. Creamos el contexto
const EmpleadosContext = createContext()
// ! 2. Configuramos el provider

const EmpleadosProvider = ( children) => {
    const [empleados, setEmpleados] = useState([])

    const data = {
        empleados,
        setEmpleados
    }
    console.log(setEmpleados)
    return <EmpleadosContext.Provider value={data}>{children}</EmpleadosContext.Provider>

}

// ! 3. Exportamos contexto y provider
export { EmpleadosProvider }
export default EmpleadosContext