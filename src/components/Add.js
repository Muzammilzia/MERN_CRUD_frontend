import React, { useState } from 'react'
import { StyledForm, StyledSpan, StyledFormContainer, StyledInput, StyledLabel, StyledSubmit, StyledMessage } from './styles/LeftPanel.styled'
import axios from 'axios'

const Add = (props) => {
  const {current, callData, setCallData} = props
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("")

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://merncrudapp1.herokuapp.com/', {
      name: name,
      age: Number(age),
      email: mail
    })
    .then(res => {
      setCallData(!callData)
      setMessage(res.data)
      setTimeout(() => setMessage(""), 3000);
    })
    .catch(err => console.log(err))
  }

  return (
    <StyledFormContainer style = {{transform: `translateX(-${current}00%)`}}>
        <StyledForm onSubmit={(e) => {
            HandleSubmit(e)
          }}>
          <StyledLabel>
            <StyledSpan>Name:</StyledSpan>
            <StyledInput type="text" placeholder='Name' value={name} onChange={event => setName(event.target.value)} />
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>Age:</StyledSpan>
            <StyledInput type="text" placeholder='22' value={age} onChange={event => setAge(event.target.value)} />
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>E-Mail:</StyledSpan>
            <StyledInput type="text" placeholder='Name@gmail.com' value={mail} onChange={event => setMail(event.target.value)} />
          </StyledLabel>
          <StyledSubmit type="submit" value="Add"/>
        </StyledForm>
        <StyledMessage>{message}</StyledMessage>
    </StyledFormContainer>
  )
}

export {Add}