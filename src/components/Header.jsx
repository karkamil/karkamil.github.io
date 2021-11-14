import styled, { keyframes } from "styled-components"
import { CloudDownloadOutlined, HighlightOffOutlined, LaptopMac, Menu, PanoramaOutlined, PhoneInTalkOutlined, WorkOutlineOutlined } from '@material-ui/icons';
import { small } from "../responsive";
import Background from '../assets/wavedlgrot.png';
import Toggle from "./Toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "../context";
import WebMenu from "./WebMenu";



const animateWave1 = keyframes`
  0%{
    background-position-x: 1000px;
  }
  100%{
    background-position-x: 0px;
  }
`

const animateWave2 = keyframes`
  0%{
    background-position-x: 0px;
  }
  100%{
    background-position-x: 1000px;
  }
`

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px;
  flex: 1;
  position: relative;
  align-items: center;
  ${small({padding: "6px"})}
`

const ContainerLeft = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

const DownloadCon = styled.div`
  background-color: #3F6357;
  /* #3F6357 #7AD49E*/
  padding: 4px 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  ${small({fontSize: "16px", padding: "4px 10px"})}
`

const Download = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`

const DownloadIcon = styled(CloudDownloadOutlined)`
  margin-right: 5px;
`

const ContainerRight = styled.div`
  flex: 1;
`

const MobileBotton = styled.div`
  display: none;
  padding-right: 6px;
  ${small({display:"flex"})}
  justify-content: flex-end;
`

const MyMenuIcon = styled(Menu)`
  cursor: pointer;
`

// waves
const Waves = styled.div`
  position: relative;
  height: 100%;
`

const Wave1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;  
  width: 100%;
  height: 68px;
  background: url(${Background});
  background-size: 1000px 68px;
  opacity: 1;
  animation: ${animateWave1} 4s linear infinite;
  ${small({backgroundSize: "1000px 44px", height: "44px"})}
`
const Wave2 = styled.div`
  position: absolute;
  top: -2px;
  left: 0;  
  width: 100%;
  height: 68px;
  background: url(${Background});
  background-size: 1000px 68px;
  opacity: 0.5;
  animation: ${animateWave2} 4s linear infinite;
  ${small({backgroundSize: "1000px 44px", height: "44px"})}
  `
// Mobile menu

const MobileMenu = styled.div`
  background: white;
  height: 100vh;
  width: 60vw;
  position: absolute;
  right: 0;
  top: 0;
  padding: 12lackpx 12px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
`

const MobileContainer = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;

`

const CloseContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex: 1;
  align-items: center;

`

const CloseMobile = styled(HighlightOffOutlined)`
  cursor: pointer;  
`

const MobileMenuElement = styled.div`
  padding: 18px 0;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
  display: flex;
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

const ShowText = styled.p`
     white-space: pre-wrap;
     display: flex;
     ${small({display: "none"})}
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useContext(ThemeContext);
  return (
    <>
    <Waves>
      <Wave1></Wave1>
      <Wave2></Wave2>
    </Waves>
    <Container>
      <ContainerLeft>
        <Toggle />
        <DownloadCon>
          <Download style={{color: theme.state.darkMode ? "white" : ""}} download href={require('../assets/cven.pdf').default}>
            <DownloadIcon />
            <ShowText>Download </ShowText>CV
          </Download>
        </DownloadCon>
      </ContainerLeft>
      <ContainerRight>
        <WebMenu />
        <MobileBotton>
          <MyMenuIcon onClick={()=> setIsOpen(!isOpen)}/>
        </MobileBotton>
        {isOpen && 
           <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} style={{background: theme.state.darkMode ? "#333" : ""}}>
            <CloseContainer>
            <CloseMobile onClick={() => setIsOpen(!isOpen)}/>
          </CloseContainer>
          <MobileContainer>
          <MobileMenuElement onClick={() => setIsOpen(!isOpen)}>
            <Link href="#Projects" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconProjects />Projects
            </Link>
          </MobileMenuElement>
          <MobileMenuElement onClick={() => setIsOpen(!isOpen)}>
            <Link href="#Skills" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconSkills />Skills
            </Link>
          </MobileMenuElement>
          <MobileMenuElement onClick={() => setIsOpen(!isOpen)}>
            <Link href="#Work" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconWork />Work
            </Link>
          </MobileMenuElement>
          <MobileMenuElement style={{marginRight: 0}} onClick={() => setIsOpen(!isOpen)}>
            <Link href="#Contact" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconContact />Contact
            </Link>
          </MobileMenuElement>
          </MobileContainer>
           </MobileMenu>
        }
      </ContainerRight>

    </Container>
    </>
  )
}

export default Header
