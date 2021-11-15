import styled from 'styled-components'
import {GitHub, Language} from '@material-ui/icons';
import { small } from '../responsive';

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
  padding: 8px 0px;
  ${small({flexDirection:"column-reverse"})}
`

const ProjectInfo = styled.div`
  margin-right: 24px;
  ${small({marginLeft:"0px", marginTop:"12px"})}
`

const ProjectTitle = styled.label`
  font-size: 22px;
  font-weight: 600;
`

const ProjectLinks = styled.div`
  margin-top: 6px;
  display: flex;
`
const ProjectLink = styled.a`
  text-decoration: none;
  color: black;
`

const ProjectButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #7AD49E;
  width: max-content;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 6px;
`

const DemoIcon = styled(Language)`
  display: flex;
  align-items: center;
  margin-right: 4px;
`

const MyGithub = styled(GitHub)`
  display: flex;
  align-items: center;
  margin-right: 4px;
`

const ProjectDesc = styled.p`
  margin: 10px 0px;
`
const ProjectTags = styled.div`
  display: flex;
  max-width: 60%;
  flex-wrap: wrap;
  color: black;
  ${small({maxWidth:"100%"})}
`
const Tag = styled.label`
  padding: 4px 8px;
  background-color: #7AD49E;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 4px;
`

const ProjectImage = styled.img`
  width: 40%;
  ${small({width:"70%"})}
`

const ProjectCard = ({project}) => {


  return (
    <Container>
      <ProjectInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectLinks>
          {project.demo.ready && 
            <ProjectLink href={project.demo.link}>
              <ProjectButton style={{}}>
                <DemoIcon/>Demo
              </ProjectButton>
            </ProjectLink>}
            {!project.demo.ready && 
            <ProjectLink href="" style={{pointerEvents: "none"}}>
              <ProjectButton style={{ backgroundColor: "grey"}}>
                <DemoIcon/>Demo
              </ProjectButton>
            </ProjectLink>}
          {project.github.ready && 
            <ProjectLink href={project.github.link} >
              <ProjectButton>
                <MyGithub></MyGithub>GitHub
              </ProjectButton>
            </ProjectLink>}
          {!project.github.ready && 
            <ProjectLink href="" style={{pointerEvents: "none"}} >
              <ProjectButton style={{ backgroundColor: "grey"}}>
                <MyGithub></MyGithub>GitHub
              </ProjectButton>
            </ProjectLink>}
        </ProjectLinks>
        <ProjectDesc>
          {project.desc}
        </ProjectDesc>
        <ProjectTags>
            {project.tags.map((tag)=>{
              return <Tag key={tag.toString()}>{tag}</Tag>
            })}
        </ProjectTags>
      </ProjectInfo>
      <ProjectImage src={project.image}/>
    </Container>
  )
}

export default ProjectCard
