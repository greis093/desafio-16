import { useRoutes } from "react-router"
import Inicio from "../pages/Inicio"
import Empleados from "../pages/Empleados"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import NoEncontrado from "../pages/NoEncontrado"
import EmpleadosDetalle from "../pages/EmpleadosDetalle"

const Rutas = () => {
  
    const rutasApp = useRoutes(
        [
            {
                path: '/',
                element: <Inicio />
            },
            {
                path: '/empleados',
                element: <Empleados />
            },
            {
                path: '/empleados/detalle/:id', /* :id (obligatorio) | :id? (opcional) */
                element: <EmpleadosDetalle />
            },
            {
                path: '/nosotros',
                element: <Nosotros />
            },
            {
                path: '/contacto',
                element: <Contacto />
            },
            {
                path: '*', /* default */
                element: <NoEncontrado />
            }
        ]
    )

    return rutasApp

}

export default Rutas