import React, {useState} from 'react'
import { StyledGetButton, StyledHeading, StyledLi, StyledRightPanel, StyledUl } from './styles/RightPanel.styled'
import axios from 'axios'

const RightPanel = () => {
  const [userData, setUserData] = useState([])

  const getData = () => {
    axios.get('https://merncrudapp1.herokuapp.com/')
    .then(response => {
      const {data} = response
      setUserData(data.map( (person, index) => {
        return(
          <StyledUl key={index}>
            <StyledLi>User_id: {person._id}</StyledLi>
            <StyledLi>Name: {person.name}</StyledLi>
            <StyledLi>Age: {person.age}</StyledLi>
            <StyledLi>Email: {person.email}</StyledLi>
          </StyledUl>)
      }))
    })
    .catch(err => console.log(err))
  }

  return (
    <StyledRightPanel>
      <StyledHeading>
        Users in Database
        <StyledGetButton onClick={() => getData()}>Refresh</StyledGetButton>
      </StyledHeading>
      {userData}      
    </StyledRightPanel>
  )
}

export {RightPanel}