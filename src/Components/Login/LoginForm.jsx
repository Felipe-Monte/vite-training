import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  return (
    // function handleSubmit(){

    //   if(username.validate() && password.validate()){

    //   }
    // }

    <section>
      <h1>Login</h1>
      <form action="">
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
