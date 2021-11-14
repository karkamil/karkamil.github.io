import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context"
import Sun from "../assets/sun.png"
import Moon from "../assets/moon.png"

const Container = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #999;
  position: relative;
  display: flex;
  margin-right: 10px;
  align-items: center;
  justify-content: space-around;
`

const Image = styled.img`
  width: 20px;
  height: 20px;
`

const Button = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  background: linear-gradient(to bottom, #888,#222);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 8px 40px rgba(0,0,0,0.5),
              inset 0 4px 4px rgba(255,255,255,0.2),
              inset 0 -4px 4px rgba(255,255,255,0.2);
  transition: 0.5s;

`

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = ()=>{
    theme.dispatch({type: "TOGGLE"})
  }

  return (
    <Container>
      <Image src={Sun} />
      <Image src={Moon} />
      <Button onClick={handleClick} 
              style={{left: theme.state.darkMode ? 0 : 25,
              background: theme.state.darkMode ? "" : "linear-gradient(to bottom, #eaeaea,#b4b4b4)",
              boxShadow: theme.state.darkMode ? "" : "0 8px 20px rgba(0,0,0,0.1), inset 0 4px 4px rgba(255,255,255,1), inset 0 -4px 4px rgba(255,255,255,1)"}}></Button>
    </Container>
  )
}

export default Toggle
