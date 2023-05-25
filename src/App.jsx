import { Outlet } from "react-router-dom"
import NavBar from "./components/NAvBAr"

function App() {

  return (
    <div className="App w-full">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
