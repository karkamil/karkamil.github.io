// import NavbarX from "./components/NavbarX"
import { useContext } from "react"
import { ThemeContext } from "./context"
import Hompage from "./components/Hompage"

function App() {
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="app" style={{backgroundColor: darkMode ? "#333" : "white", color: darkMode && "white"}}>
      {/* <NavbarX /> */}
      <Hompage />
    </div>
  )
}

export default App
