import React from 'react';
import Input from '../Forms/Input';
import Button from '../Forms/Button';

const LoginForm = () => {
  return (
    <section>
      <h1>Login</h1>
      <form action="">
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
