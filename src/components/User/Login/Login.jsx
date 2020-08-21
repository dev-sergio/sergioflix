import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import StoreContext from '../../Store/Context';

import './Login.css';
import UIButton from '../../UI/Button/Button';
import FormField from '../../FormField';

const FormContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right:auto;
  @media(max-width: 800px){
    width: 100%;
  }
`;

const SpanInfo = styled.span`
  display: block;
  font-size: 10pt;
  color: var(--blackLighter);
`;

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  // eslint-disable-next-line consistent-return
  function onSubmit(event) {
    event.preventDefault();

    const { token, erro } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(erro);
    setValues(initialState);
  }

  return (
    <>
      <FormContainer>
        <h1> Acessar o Sistema</h1>

        <form onSubmit={onSubmit}>

          <FormField
            label="Usuário"
            req="*"
            type="text"
            value={values.user}
            name="user"
            onChange={onChange}
            required
          />

          <FormField
            label="Senha"
            req="*"
            type="password"
            value={values.password}
            name="password"
            onChange={onChange}
            required
          />
          <SpanInfo> * Campo obrigatório =)</SpanInfo>
          {error && (
            <div className="user-login__error">{error}</div>
          )}

          <UIButton
            type="submit"
            theme="contained-green"
            className="user-login__submit-button"
            rounded
          >
            Entrar
          </UIButton>
        </form>
      </FormContainer>
    </>
  );
};

export default UserLogin;
