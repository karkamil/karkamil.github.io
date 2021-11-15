import { UnfoldLess, UnfoldMore } from '@material-ui/icons'
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
const UnfoldMoreIcon = styled(UnfoldMore)`
  color: #3F6357;
  cursor: pointer;
`

const UnfoldLessIcon = styled(UnfoldLess)`
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

const WorkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0px;
`

const Work = () => {
  const data = WorkData;
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
        Work
      </Title>
      </TitleContainer>
      <WorkList>
        {unfold &&  data.map((item) => {
          return(
            <WorkCard key={item.id} item ={item} />
          )
        })}
        {!unfold &&  data.slice(0, 2).map((item) => {
          return(
            <WorkCard key={item.id} item ={item} />
          )
        })}
      </WorkList>
    </Container>
  )
}

export default Work
