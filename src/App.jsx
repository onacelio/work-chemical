import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="App w-full">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
