import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string()
    .trim()
    .required('Campo \'Usuário\' é obrigatório'),
  
  password: yup.string()
    .trim()
    .required('Campo \'Senha\' é obrigatório'),
});

export default schema;