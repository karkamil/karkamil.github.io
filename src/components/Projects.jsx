import React, { useState } from 'react'
import styled from 'styled-components'
import { ProjectData } from '../data/projects'
import ProjectCard from './ProjectCard'
import Separator from './Separator'
import { ArrowRight } from '@material-ui/icons'
import { small } from '../responsive'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 12px;
`

const TitleContainer = styled.div`
  display: flex; 
  align-items: center;
  width: auto;
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

const ProjectContainer = styled.div`

`

const ArrowRightIcon = styled(ArrowRight)`
  color: #3F6357;
  
  cursor: pointer;
`


const ProjectsCopy = () => {
  const data = ProjectData;
  const [projects, setProjects] = useState(false)
  
  return (
    <Container>
      <Separator />
      <TitleContainer onClick={() => setProjects(!projects)}>

      <ArrowRightIcon style={{ transform: projects && "rotate(90deg)" }} fontSize="large"/>
      <Title >
        {"<Projects>"}
        {!projects && <Close>
          ...
          {"</Projects>"}
        </Close>}
      </Title>
      </TitleContainer>
      <ProjectContainer>
        {projects && data.map((project)=>{
          return <ProjectCard project={project} key={project.id}/>
        })
        }
        {!projects && data.slice(1, 2).map((project)=>{
          return <ProjectCard project={project} key={project.id}/>
        })}
      </ProjectContainer>
      <Title onClick={() => setProjects(!projects)}>
        {projects && <Close>

          {"</Projects>"}
        </Close>}
      </Title>
    </Container>
  )
}

export default ProjectsCopy
