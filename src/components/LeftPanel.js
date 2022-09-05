import React, { useState } from 'react'
import { Add } from './Add';
import { Delete } from './Delete';
import { ButtonContainer, StyledContainer, StyledButton } from './styles/LeftPanel.styled';
import { Update } from './Update';


const LeftPanel = (props) => {
    const {callData, setCallData} = props
    const [current, setCurrent] = useState(0)
  return (
    <div style={{paddingTop: "50px"}}>
        <ButtonContainer>
            <StyledButton onClick={() => setCurrent(0)} style = {{backgroundColor: current === 0 ? 'rgb(34, 34, 42)' : '#efefef', color: current === 0 ? 'white' : 'black'}}>Add</StyledButton>
            <StyledButton  onClick={() => setCurrent(1)} style = {{backgroundColor: current === 1 ? 'rgb(34, 34, 42)' : '#efefef', color: current === 1 ? 'white' : 'black'}}>Update</StyledButton>
            <StyledButton  onClick={() => setCurrent(2)} style = {{backgroundColor: current === 2 ? 'rgb(34, 34, 42)' : '#efefef', color: current === 2 ? 'white' : 'black'}}>Delete</StyledButton>
        </ButtonContainer>
        <StyledContainer>
            <Add current = {current} callData = {callData} setCallData = {setCallData}/>
            <Update  current = {current} callData = {callData} setCallData = {setCallData}/>
            <Delete current = {current} callData = {callData} setCallData = {setCallData}/>
        </StyledContainer>
    </div>
  )
}

export {LeftPanel}