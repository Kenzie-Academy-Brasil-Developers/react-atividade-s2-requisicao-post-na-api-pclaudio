import { useState } from 'react';
import Login from './components/Login';
import Display from './components/Display';
import { Container } from './style';

const App = () => {
  const [ messages, setMessages ] = useState([]);

  return (
    <Container>
      <Login setMessages={ setMessages } />
      <Display messages={ messages } />
    </Container>
  );
};

export default App;