import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #e2e1e0;
  }

  #root {
    display: flex;
    justify-content: center;
    padding: 20px 10px;
    min-height: 100vh;
    width: 100vw;
  }
`;

export const Container = styled.div`
  align-items: center;
  max-width: 400px;

  @media(min-width: 768px) {
    margin-top: 20vh;
  }
`;