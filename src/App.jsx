import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBAr"

function App() {

  return (
    <div className="App w-full">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default App
