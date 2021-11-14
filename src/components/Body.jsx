import styled from 'styled-components'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Skills from './Skills'
import Work from './Work'

const Container = styled.div`
  padding: 12px;
  padding-bottom: 36px;
  /* display: flex;
  flex-direction: column;
  color: green;
  font-size: 100vh;
  text-transform: uppercase; */
`


const Body = () => {

  return (
    <Container>
      <About id='About'/>
      <Projects id='Projects' />
      <Skills id='Skills' />
      <Work id='Work' />
      <Contact id='Contact' />
    </Container>
  )
}

export default Body
