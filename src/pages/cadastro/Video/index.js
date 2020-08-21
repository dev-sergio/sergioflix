import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

const RightContainer = styled.div`
  text-align: right;
  margin-bottom: 20px;
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

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ nome }) => nome);
  const { handlerChange, values } = useForm({
    titulo: '',
    link: '',
    categoria: '',
    descricao: '',
  });

  useEffect(() => {
    categoriesRepository.getAll().then((categoriesFromServer) => {
      setCategories(categoriesFromServer);
    });
  }, []);

  return (
    <PageDefault>

      <h1>Cadastro de Vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        const categoriaEscolhida = categories.find((categoria) => categoria.nome === values.categoria);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          descricao: values.descricao,
          categoriaId: categoriaEscolhida.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handlerChange}
        />
        <FormField
          label="Link do Vídeo"
          type="url"
          name="url"
          value={values.url}
          onChange={handlerChange}
        />
        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handlerChange}
          suggestions={categoryTitles}
        />
        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handlerChange}
        />
        <RightContainer>
          <Button type="submit">
            Cadastrar
          </Button>
        </RightContainer>

        <Button to="/cadastro/categoria" as={Link} className="ButtonLink" style={{ float: 'right', background: '#008B8B' }}>
          Cadastrar Categoria
        </Button>
      </form>
      <br />

    </PageDefault>
  );
}

export default CadastroVideo;
