import styled from "styled-components"
import { small } from "../responsive"
import { LaptopMac, PanoramaOutlined, PhoneInTalkOutlined, WorkOutlineOutlined } from '@material-ui/icons'
import { useContext } from "react"
import { ThemeContext } from "../context"

const Container = styled.div`
  display: flex;
  ${small({display:"none"})}
  justify-content: flex-end;
`

const WebMenuElement = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-right: 16px;
  font-weight: 700;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  opacity: 0.78;
  transition: 0.5s;
  &:hover{
    opacity: 1;
  }
`

const IconProjects = styled(PanoramaOutlined)`
  color: "black";
  margin-right: 4px;
`

const IconSkills = styled(LaptopMac)`
  color: "black";
  margin-right: 4px;
`

const IconWork = styled(WorkOutlineOutlined)`
  color: "black";
  margin-right: 4px;
`

const IconContact = styled(PhoneInTalkOutlined)`
  color: "black";
  margin-right: 4px;
`


const WebMenu = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
          <WebMenuElement>
            <Link href="#Projects" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconProjects />Projects
            </Link>
          </WebMenuElement>
          <WebMenuElement>
            <Link href="#Skills" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconSkills />Skills
            </Link>
          </WebMenuElement>
          <WebMenuElement>
            <Link href="#Work" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconWork />Work
            </Link>
          </WebMenuElement>
          <WebMenuElement style={{marginRight: 0}}>
            <Link href="#Contact" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconContact />Contact
            </Link>
          </WebMenuElement>
        </Container>
  )
}

export default WebMenu
