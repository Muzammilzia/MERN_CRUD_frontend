import React, {useState, useEffect} from 'react'
import { StyledHeading, StyledUlContainer, StyledLi, StyledRightPanel, StyledUl } from './styles/RightPanel.styled'
import axios from 'axios'

const RightPanel = (props) => {
  const {callData} = props
  const [userData, setUserData] = useState([])

  useEffect(() => {
    console.log("here")
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
  }, [callData])

  return (
    <div>
      <StyledHeading>
        Users in Database
      </StyledHeading>
      <StyledRightPanel>
        <StyledUlContainer>
          {userData}      
        </StyledUlContainer>
      </StyledRightPanel>
    </div>
  )
}

export {RightPanel}