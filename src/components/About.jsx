import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Typed from 'typed.js';
import { small } from '../responsive';
import SocialContact from './SocialContact';

const Container = styled.div`
  padding: 48px 0px;
  ${small({padding:"20px 0px"})}
`

const AboutTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${small({
    flexDirection: "column",
    justifyContent: "center"
  })}
`

const AboutInfo = styled.div`
  font-size: 25px;
  height:125px;
  width: 274px;
  ${small({fontSize:"20px", height: "102px", width: "210px"})}
`

const AboutPhoto = styled.div`

`

const Image = styled.img`
  height: 420px;
  ${small({height:"280px"})}
`

const InfoName = styled.span`
  color: #7AD49E;
  font-size: 32px;
  ${small({fontSize:"26px"})}
`

const About = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Ready to join your<br/> team...",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    }

    typed.current = new Typed(el.current, options)

    return () => {
      typed.current.desteroy();

    }
  }, [])

  return (
    <Container>
      <AboutTop>
        <AboutInfo>
          Hello There 👋, I am <br/>
          <InfoName > Kamil Karchut</InfoName>
          <br/> <span ref={el}></span>
        </AboutInfo>
        <AboutPhoto>
          <Image src={require('../assets/coding.png').default} />
        </AboutPhoto>
      </AboutTop>
      <SocialContact />
    </Container>
  )
}

export default About
