import { Link, NavLink } from "react-router"

const Navbar = () => {

  return (
    <nav className="bg-amber-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-black text-lg font-bold">Educación IT</Link>
            <ul className="flex space-x-5">
                <li><NavLink to="/" className="text-black hover:text-gray-200">Inicio</NavLink></li>
                <li><NavLink to="/empleados" className="text-black hover:text-gray-200">Empleados</NavLink></li>
                <li><NavLink to="/nosotros" className="text-black hover:text-gray-200">Nosotros</NavLink></li>
                <li><NavLink to="/contacto" className="text-black hover:text-gray-200">Contacto</NavLink></li>
            </ul>
        </div>
    </nav>
  )
  
}

export default Navbar