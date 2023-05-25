import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from "react-icons/bi"

const NavBar = () => {

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/search?q=${search}`)
    setSearch("")
  }

  const location = useLocation()

  return (
    <nav id="navbar" className="flex justify-between text-center px-8 py-4 items-center">
        <h1 className="font-plus-jakarta-sans font-semibold text-3xl">
          <Link to="/" className="flex text-yellow-400 hover:text-yellow-500 duration-500 items-center gap-2">
            <h2 className="text-carb"><span className="text-hidro">HIDRO</span>CARBONETOS</h2>
          </Link>
        </h1>
        <ul className="flex gap-4 items-center">
            <li><Link to="/molecules" className={location.pathname != "/" ? "hidden" : "bg-bg-button rounded-rounded-30 py-2.5  px-7 text-molecules font-semibold"}>MOLECULES</Link></li>
            <li className={location.pathname === "/" ? "hidden": ""}>
                <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
                    <input 
                      type="text" 
                      placeholder="Busque uma molécula" 
                      className="w-72 px-8 py-3 border-4 bg-vg-input rounded-full border-border-input" 
                      onChange={(e) => {setSearch(e.target.value)}}
                      value={search}
                    />
                    <button type="submit" className="rounded-full w-10 h-10 bg-border-input flex items-center justify-center text-white">
                        <BiSearchAlt2/>
                    </button>
                </form>
            </li>
        </ul>
      </nav>
  )
}

export default NavBar