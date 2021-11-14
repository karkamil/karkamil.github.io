import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { desktop, mobile } from '../responsive'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Contact from './Contact'
import Work from './Work'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  ${desktop({width: "90%"})}
  ${mobile({width: "100%"})}
`

const Hompage = () => {
  return (
    <Container >
      <div id='About'>
        <Header />
        <About />
      </div>
      <div id='Projects'>
        <Projects />
      </div>
      <div id='Skills'>
        <Skills />
      </div>
      <div id='Work'>
      <Work />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Footer/>
    </Container>
  )
}

export default Hompage
