import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './styles/index.css';
import Calculator from './components/views/Calculator';

const Container = styled.div`
  align-items: center;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Calculator />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
);
