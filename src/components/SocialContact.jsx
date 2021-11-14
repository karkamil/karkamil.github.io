import React from 'react'
import styled from 'styled-components';
import { SocialData } from '../data/social'
import { small } from '../responsive';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const MyLink = styled.a`
  cursor: pointer;
  transition: 0.5s;
  &:hover{transform:translateY(-10px)}
`

const IconContainer = styled.div`
  padding: 6px;
  margin: 6px;
`

const Image = styled.img`
  height: 40px;
  
  ${small({height: "32px"})};
  
`

const SocialContact = () => {
  const data = SocialData;
  return (
    <Container>
      {data.map((item) => {
        return(
          <MyLink href={item.link} key={item.id} >
            <IconContainer >
              <Image src={item.icon} />
            </IconContainer>
          </MyLink>
        )
      })}
    </Container>
  )
}

export default SocialContact
