import React, { useState } from 'react';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: baseline;
  justify-content: space-evenly;
  width: 100%;
  background-color: #ffffff;
`

function App() {
  const [callData, setCallData] = useState(true)

  return (
    <StyledApp>
      <LeftPanel callData = {callData} setCallData = {setCallData}/>
      <RightPanel callData = {callData}/>
    </StyledApp>
  );
}

export default App;