import React from 'react'
import styled from 'styled-components'
import { small } from '../responsive'

const Container = styled.div`
  padding: 8px;
  width: 45%;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  ${small({width: "100%"})};
`

const WorkLogo = styled.img`
  width: 80px;
  margin-left: 6px;
`

const WorkInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const CompanyName = styled.label`

`

const WorkDates = styled.div`
  color: gray;
`

const Dates = styled.label`

`

const WorkDesc = styled.div`
  margin-top: 6px;
  text-align: left;
`


const WorkText = styled.p`

`

const WorkCard = ({item}) => {
  return (
    <Container>
      <WorkLogo src={item.companyLogo} />
      <WorkInfo>
        <CompanyName> {item.company} </CompanyName>
        <WorkDates>
          <Dates> {item.dateJoining} - {item.dateEnd} </Dates>
        </WorkDates>
        <WorkDesc>
          <WorkText>{item.work}</WorkText>
        </WorkDesc>
      </WorkInfo>
    </Container>
  )
}

export default WorkCard