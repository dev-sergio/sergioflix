import styled from 'styled-components';

import React from 'react';

import Footer from '../Footer';
import Menu from '../Menu';

const Main = styled.main`
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
