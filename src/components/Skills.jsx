import { UnfoldLess, UnfoldMore } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { SkillsData } from '../data/skills'
import { small } from '../responsive'
import Separator from './Separator'
import SkillCard from './SkillCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 12px;
  `
const TitleContainer = styled.div`
  display: flex; 
  align-items: center;
`

const Title = styled.label`
  font-size: 32px;
  font-weight: 700;
  white-space: nowrap;
  ${small({fontSize: "25px"})};
  cursor: pointer;
`

const UnfoldMoreIcon = styled(UnfoldMore)`
  color: #3F6357;
  cursor: pointer;
`
  
const UnfoldLessIcon = styled(UnfoldLess)`
  color: #3F6357;
  cursor: pointer;
`

const SkillsContainer = styled.div`

`

const SkillsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
  ${small({flexDirection: "column", alignItems: "center"})};
`

const SkillsSecTitle = styled.label`
  font-size: 24px;
  font-weight: 600;
`

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  justify-content: flex-end;
  ${small({maxWidth: "100%", justifyContent: "center"})};
`


const Skills = () => {
  const data = SkillsData;
  const [unfold, setUnfold] = useState(false)

  return (
    <Container>
      <Separator />
      <TitleContainer onClick={() => setUnfold(!unfold)} >
        {unfold && 
        <UnfoldLessIcon fontSize= "large"/>
        }
        {!unfold && 
        <UnfoldMoreIcon fontSize= "large"/>
        }
      <Title>
        Skills
      </Title>
      </TitleContainer>
      <SkillsContainer>
        {unfold && data.map((item) => {
          return (
            <SkillsSection key={item.id}>
              <SkillsSecTitle >{item.type}</SkillsSecTitle>
              <SkillsList>
                {item.list.map((skill) => {
                  return (
                    <SkillCard key={skill.id} skill = {skill} />
                  )
                })}
              </SkillsList>
            </SkillsSection>
          )
        })}
        {!unfold && data.slice(0, 1).map((item) => {
          return (
            <SkillsSection key={item.id}>
              <SkillsSecTitle >{item.type}</SkillsSecTitle>
              <SkillsList>
                {item.list.map((skill) => {
                  return (
                    <SkillCard key={skill.id} skill = {skill} />
                  )
                })}
              </SkillsList>
            </SkillsSection>
          )
        })
        }       
      </SkillsContainer>
    </Container>
  )
}

export default Skills
