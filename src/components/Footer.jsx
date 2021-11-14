import { AccountBoxOutlined, LaptopMac, PanoramaOutlined, WorkOutlineOutlined } from '@material-ui/icons'
import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { ThemeContext } from '../context'
import { small } from '../responsive'
import SocialContact from './SocialContact'
import Background from '../assets/wavedg.png';

const Container = styled.div`

`

const FooterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height:300px;
`

const Footer = styled.div`
  position: relative;
  width: 100%;
  background: #3F6357;
  /* background: #7AD49E; */
  min-height: 100px;
  padding: 20px 50px 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${small({padding: "20px 18px 2px"})}
`

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

const Waves = styled.div`

`

const Wave1 = styled.div`
  position: absolute;
  top: -100px;
  left: 0;  
  width: 100%;
  height: 100px;
  background: url(${Background});
  background-size: 1000px 100px;
  z-index: 1000;
  opacity: 1;
  bottom: 0;
  animation: ${animateWave1} 4s linear infinite;
`
const Wave2 = styled.div`
  position: absolute;
  top: -100px;
  left: 0;  
  width: 100%;
  height: 100px;
  background: url(${Background});
  background-size: 1000px 100px;
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: ${animateWave2} 4s linear infinite;
`
const Wave3 = styled.div`
  position: absolute;
  top: -100px;
  left: 0;  
  width: 100%;
  height: 100px;
  background: url(${Background});
  background-size: 1000px 100px;
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: ${animateWave1} 3s linear infinite;
`
const Wave4 = styled.div`
  position: absolute;
  top: -100px;
  left: 0;  
  width: 100%;
  height: 100px;
  background: url(${Background});
  background-size: 1000px 100px;
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: ${animateWave2} 3s linear infinite;
`

const Menu = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
`
const MenuEl = styled.li`
  list-style: none;
  font-size: 1.2em;
  margin: 0 10px;
  display: inline-block;
  transition: 0.5s;
  text-decoration: none;
  opacity: 0.75;
  cursor: pointer;
  &:hover{opacity:1}
  ${small({fontSize: "1em"})}
`

const LinkText = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
`

const FooterText = styled.p`
  color: #312f2f;
  text-align: center;
  margin-top: 15px;
  font-size: 0.8em;
  ${small({fontSize: "0.6em"})}
`

const IconProjects = styled(PanoramaOutlined)`
  margin-right: 4px;
  opacity: 0.75;
`

const IconSkills = styled(LaptopMac)`
  margin-right: 4px;
  opacity: 0.75;
`


const IconWork = styled(WorkOutlineOutlined)`
  margin-right: 4px;
  opacity: 0.75;
`
const IconAbout = styled(AccountBoxOutlined)`
  margin-right: 4px;
  opacity: 0.75;
`


const NewFooter = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
    
    <FooterContainer>
      <Footer>
        <Waves>
          <Wave1></Wave1>
          <Wave2></Wave2>
          <Wave3></Wave3>
          <Wave4></Wave4>
        </Waves>
        <SocialContact/>
        <Menu>
          <MenuEl>
            <LinkText href="#About" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconAbout /> About
            </LinkText>
          </MenuEl>
          <MenuEl>
            <LinkText href="#Projects" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconProjects /> Projects
            </LinkText>
          </MenuEl>
          <MenuEl>
            <LinkText href="#Skills" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconSkills /> Skills
            </LinkText>
          </MenuEl>
          <MenuEl>
            <LinkText href="#Work" style={{color: theme.state.darkMode ? "white" : ""}}>
              <IconWork /> Work
            </LinkText>
          </MenuEl>
        </Menu>
        <FooterText>Copyright © 2021 | All Rights Reserved NOT YET | Designed by Kamil Karchut</FooterText>
      </Footer>
    </FooterContainer>
    </Container>
  )
}

export default NewFooter
