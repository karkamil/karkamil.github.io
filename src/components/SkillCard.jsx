import React from 'react'
import styled from 'styled-components'
import { small } from '../responsive'

const Container = styled.div`
  width: max-content;
  padding: 8px 16px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 6px;
  ${small({width: "max-content", height: "100px" })}
` 

const SkillIcon = styled.div`
  font-size: 80px;
  ${small({ fontSize: "60px" })}
`

const SkillName = styled.label`
  font-size: 18px;
  /* ${small({fontSize: "20px"})} */
`

const SkillCard = ({ skill }) => {
  return (
    <Container >
      <SkillIcon key={skill.icon.toString()}>
        {skill.icon}
    </SkillIcon>
      <SkillName key={skill.name.toString()}>{skill.name}</SkillName>
    </Container>
  )
}

export default SkillCard
