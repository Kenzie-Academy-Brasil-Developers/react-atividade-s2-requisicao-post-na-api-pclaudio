import styled from "styled-components";

export const Message = styled.div`
  width: 100%;
  background-color: ${ ({ type }) => type === 'success' ? 'green' : 'red' };
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 20px 30px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 8px 18px rgba(0,0,0,0.19), 0 4px 4px rgba(0,0,0,0.23);
  animation: fadeInOut 5s;
  opacity: 0;

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
    }

    10%, 90% {
      opacity: 1;
    }
  }
`;