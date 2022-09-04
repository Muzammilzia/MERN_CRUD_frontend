import React, {useState} from 'react'
import { StyledForm, StyledSpan, StyledFormContainer, StyledInput, StyledLabel, StyledSubmit, StyledMessage } from './styles/LeftPanel.styled'
import axios from 'axios'

const Delete = (props) => {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.delete(`https://merncrudapp1.herokuapp.com/${id}`)
    .then(res => {
      setMessage(res.data)
      setTimeout(() => setMessage(""), 3000);
    })
    .catch(err => console.log(err))
  }

  return (
    <StyledFormContainer style = {{transform: `translateX(-${props.current}00%)`}}>
        <StyledForm onSubmit={(e) => HandleSubmit(e)}>
          <StyledLabel>
            <StyledSpan>User_id:</StyledSpan>
            <StyledInput type="text" placeholder='User_id' value={id} onChange={event => setId(event.target.value)} />
          </StyledLabel>
          <StyledSubmit type="submit" value="Delete"/>
        </StyledForm>
        <StyledMessage>{message}</StyledMessage>
    </StyledFormContainer>
  )
}

export {Delete}