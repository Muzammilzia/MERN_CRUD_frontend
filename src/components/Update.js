import React, {useState} from 'react'
import { StyledForm, StyledSpan, StyledFormContainer, StyledInput, StyledLabel, StyledSubmit, StyledMessage } from './styles/LeftPanel.styled'
import axios from 'axios'

const Update = (props) => {
  const {current, callData, setCallData} = props
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.put('https://merncrudapp1.herokuapp.com/', {
      id: id,
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
        <StyledForm onSubmit={(e) => HandleSubmit(e)}>
          <StyledLabel>
            <StyledSpan>User_id:</StyledSpan>
            <StyledInput type="text" placeholder='User_id' value={id} onChange={event => setId(event.target.value)} />
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>New_Name:</StyledSpan>
            <StyledInput type="text" placeholder='Name' value={name} onChange={event => setName(event.target.value)} />
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>New_Age:</StyledSpan>
            <StyledInput type="text" placeholder='22' value={age} onChange={event => setAge(event.target.value)} />
          </StyledLabel>
          <StyledLabel>
            <StyledSpan>New_E-Mail:</StyledSpan>
            <StyledInput type="text" placeholder='Name@gmail.com' value={mail} onChange={event => setMail(event.target.value)} />
          </StyledLabel>
          <StyledSubmit type="submit" value="Update"/>
        </StyledForm>
        <StyledMessage>{message}</StyledMessage>
    </StyledFormContainer>
  )
}

export {Update}