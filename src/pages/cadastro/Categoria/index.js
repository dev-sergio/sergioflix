/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField/index';
import 'react-toastify/dist/ReactToastify.css';
import loading from '../../../assets/gif/loading.gif';

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

function Categoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [dadosCategoria, setCategoria] = useState(valoresIniciais);

  function setDadosCategoria(chave, valor) {
    setCategoria({
      ...dadosCategoria,
      [chave]: valor,
    });
  }

  function alterarCategoria(dadoNovo) {
    setDadosCategoria(
      dadoNovo.target.getAttribute('name'),
      dadoNovo.target.value,
    );
  }

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://sergio-flix.herokuapp.com/categorias';

  useEffect(() => {
    fetch(URL).then(async (response) => {
      const retorno = await response.json();
      setCategorias([
        ...retorno,
      ]);
    });
  }, [URL]);

  function addCategoria(categoria) {
    const novaCategoria = {
      id: dadosCategoria.length + 1,
      nome: categoria.nome,
      descricao: categoria.descricao,
    };

    fetch(URL,
      {
        method: 'post',
        headers: {
          // eslint-disable-next-line quote-props
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaCategoria),
      }).then(async (response) => {
      if (response.status === 201) {
        setCategorias([
          ...categorias,
          categoria,
        ]);

        toast.success('Categoria cadastrada com sucesso! 🎞', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('Puts erro ao cadastrar!', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  }

  return (
    <>
      <PageDefault>

        <FormContainer>
          <h1> Cadastro de Categoria</h1>

          <form onSubmit={function handleSubmit(submit) {
            submit.preventDefault();
            if (dadosCategoria.nome !== '') {
              addCategoria(dadosCategoria);
              setCategoria(valoresIniciais);
            } else {
              toast.warning('Meu, tem campo obrigatório vazio!', {
                position: 'bottom-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }}
          >

            <FormField
              label="Categoria do filme/seriado"
              req="*"
              type="text"
              value={dadosCategoria.nome}
              name="nome"
              onChange={alterarCategoria}
              required
            />

            <FormField
              label="Descreva o filme/seriado"
              req="*"
              type="textarea"
              value={dadosCategoria.descricao}
              name="descricao"
              onChange={alterarCategoria}
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
            <ToastContainer />
          </form>
        </FormContainer>
      </PageDefault>
    </>
  );
}

export default Categoria;
