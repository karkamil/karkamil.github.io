import { ArrowRight } from '@material-ui/icons'
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
const ArrowRightIcon = styled(ArrowRight)`
  color: #3F6357;
  cursor: pointer;
`

const Title = styled.label`
  font-size: 32px;
  font-weight: 700;
  white-space: nowrap;
  ${small({fontSize: "25px"})};
  cursor: pointer;
`

const Close = styled.label`
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
  const [projects, setProjects] = useState(false)

  return (
    <Container>
      <Separator />
      <TitleContainer onClick={() => setProjects(!projects)}>

      <ArrowRightIcon style={{ transform: projects && "rotate(90deg)" }} fontSize="large"/>
      <Title >
        {"<Skills>"}
        {!projects && <Close>
          ...
        {"</Skills>"}
        </Close>}
      </Title>
      </TitleContainer>
      <SkillsContainer>
        {projects && data.map((item) => {
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
        {!projects && data.slice(0, 1).map((item) => {
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
      <Title >
        {projects && 
        <Close onClick={() => setProjects(!projects)}>
          {"</Skills>"}
        </Close>}
      </Title>
    </Container>
  )
}

export default Skills
