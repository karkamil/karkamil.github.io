import React, { useState } from 'react'
import styled from 'styled-components'
import { ProjectData } from '../data/projects'
import ProjectCard from './ProjectCard'
import Separator from './Separator'
import { UnfoldLess, UnfoldMore } from '@material-ui/icons'
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

const ProjectContainer = styled.div`

`

const UnfoldMoreIcon = styled(UnfoldMore)`
  color: #3F6357;
  cursor: pointer;
`

const UnfoldLessIcon = styled(UnfoldLess)`
  color: #3F6357;
  cursor: pointer;
`


const ProjectsCopy = () => {
  const data = ProjectData;
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
        Projects
      </Title>
      </TitleContainer>
      <ProjectContainer>
        {unfold && data.map((project)=>{
          return <ProjectCard project={project} key={project.id}/>
        })
        }
        {!unfold && data.slice(1, 2).map((project)=>{
          return <ProjectCard project={project} key={project.id}/>
        })}
      </ProjectContainer>
    </Container>
  )
}

export default ProjectsCopy
