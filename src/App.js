import React from 'react';
import './App.css';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 100%;
  background-color: #ffffff;
`

function App() {
  return (
    <StyledApp>
      <LeftPanel />
      <RightPanel />
    </StyledApp>
  );
}

export default App;