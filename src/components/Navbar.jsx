import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex text-center justify-between lg:px-40 pt-3 backdrop-blur fixed top-0 w-full z-50 snap-y text-white">
      <div className="flex gap-5">
        <Link to="/" className="p-2 border rounded-xl backdrop-blur-none">
          Logo
        </Link>
      </div>
      <div className="flex gap-5">
        <Link to="/" className="p-2 border rounded-xl backdrop-blur-none">
          Inicio
        </Link>
        <Link to="/" className="p-2 border rounded-xl backdrop-blur-none">
          Proyectos
        </Link>
      </div>
    </nav>
  )
}
