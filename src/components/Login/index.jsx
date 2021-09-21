import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import axios from 'axios';
import { Button, Card, Input } from './style';
import { useEffect } from 'react';

const Login = ({ setMessages }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (data) => {
    let status = 0;
    
    axios.post('https://kenzieshop.herokuapp.com/sessions/', data)
      .then(response => status = response.status)
      .catch(error => status = error.status)
      .then(() => {
        if (status === 200) {
          setMessages([{ text: 'Sucesso na autenticação', type: 'success' }]);
        } else {
          setMessages([{ text: 'Falha na autenticação', type: 'error' }]);
        }
      });

    reset();
  };

  useEffect(() => {
    const errorMessages = [];

    for (const property of Object.keys(errors)) {
      errorMessages.push({ 
        text: errors[property].message,
        type: 'error',
      });
    }

    setMessages(errorMessages);

  }, [errors, setMessages]);

  return (
    <Card>
      <form onSubmit={ handleSubmit(handleOnSubmit) }>
        <Input type='text' placeholder='Usuário' autoFocus {...register('username')} />
        <Input type='password' placeholder='Senha' {...register('password')} />
        <Button type='submit'>Login</Button>
      </form>
    </Card>
  );
};

export default Login;