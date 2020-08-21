/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import loading from '../../../assets/gif/loading.gif';
import categoriasRepository from '../../../repositories/categorias';

const FormContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right:auto;
  @media(max-width: 800px){
    width: 100%;
  }
`;

const Loading = styled.div`
  text-align: center;
`;

const Button = styled.button`
  color: var(--black);
  border: 1px solid var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 5px 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

const SpanInfo = styled.span`
  display: block;
  font-size: 10pt;
  color: var(--blackLighter);
`;

const RightContainer = styled.div`
  text-align: right;
  margin-bottom: 20px;
`;

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handlerChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <>
      <PageDefault>

        <FormContainer>
          <h1>
            Cadastro de Categoria:&nbsp;
            {values.nome}
          </h1>

          <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            categoriasRepository.create({
              nome: values.nome,
              descricao: values.descricao,
              cor: values.cor,
            }).then(() => {
              setCategorias([
                ...categorias,
                values,
              ]);
              clearForm();
            });
          }}
          >

            <FormField
              label="Categoria do filme/seriado"
              req="*"
              type="text"
              value={values.nome}
              name="nome"
              onChange={handlerChange}
              required
            />

            <FormField
              label="Descreva a categoria"
              req="*"
              type="textarea"
              value={values.descricao}
              name="descricao"
              onChange={handlerChange}
              required
            />

            <FormField
              label="cor"
              type="color"
              value={values.cor}
              name="cor"
              onChange={handlerChange}
              required
            />

            <SpanInfo> * Campo obrigatório =)</SpanInfo>
            <RightContainer>
              <Button>
                Cadastrar
              </Button>
            </RightContainer>
            {categorias.length === 0 && (
              <Loading>
                <img src={loading} alt="Calma aí..." />
              </Loading>
            )}
            <ul>
              {categorias.map((categoria, index) => (
                <li key={`${categoria}${index}`}>
                  {categoria.nome}
                </li>
              ))}
            </ul>
          </form>
        </FormContainer>
      </PageDefault>
    </>
  );
}

export default CadastroCategoria;
