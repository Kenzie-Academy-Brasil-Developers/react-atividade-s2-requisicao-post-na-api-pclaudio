import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  padding: 20px 10px;
  margin-bottom: 20px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  @media(min-width: 768px) {
    padding: 40px 60px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  margin-bottom: 20px;
  border: 2px solid #7209b7;
  border-radius: 4px;
  color: #7209b7;
  font-size: 1.1rem;
  font-weight: 500;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: #7209b7;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  border-style: none;
  border-radius: 4px;
  background-color: #7209b7;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;

  :hover {
    cursor: pointer;
    background-color: #480ca8;
  }
`;