import { ArrowRight } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { WorkData } from '../data/work'
import { small } from '../responsive'
import Separator from './Separator'
import WorkCard from './WorkCard'

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


const WorkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;
`

const Work = () => {
  const data = WorkData;
  const [projects, setProjects] = useState(false)

  return (
    <Container>

      <Separator />
      <TitleContainer onClick={() => setProjects(!projects)}>

      <ArrowRightIcon style={{ transform: projects && "rotate(90deg)" }} fontSize="large"/>
      <Title >
        {"<Work>"}
        {!projects && <Close>
          ...
        {"</Work>"}
        </Close>}
      </Title>
      </TitleContainer>
      <WorkList>
        {projects &&  data.map((item) => {
          return(
            <WorkCard key={item.id} item ={item} />
          )
        })}
        {!projects &&  data.slice(0, 2).map((item) => {
          return(
            <WorkCard key={item.id} item ={item} />
          )
        })}
      </WorkList>
      <Title >
        {projects && 
        <Close onClick={() => setProjects(!projects)}>
          {"</Work>"}
        </Close>}
      </Title>
    </Container>
  )
}

export default Work
