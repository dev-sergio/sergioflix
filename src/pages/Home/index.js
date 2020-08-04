import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import { HomeBase } from './styles';

function Home() {
  const carousels = [];

  for (const [index] of dadosIniciais.categorias.entries()) {
    carousels.push(<Carousel
      key={index}
      ignoreFirstVideo
      category={dadosIniciais.categorias[index]}
    />);
  }

  return (
    <HomeBase>

      <div className="Home">

        <Menu />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription="Um dos fimes mais belos que já assisti, Durante a Segunda Guerra Mundial na Itália, o judeu Guido e seu filho Giosué são levados para um campo de concentração nazista. Afastado da mulher, ele tem que usar sua imaginação para fazer o menino acreditar que estão participando de uma grande brincadeira, com o intuito de protegê-lo do terror e da violência que os cercam."
        />

        { carousels }
        <Footer />
      </div>
    </HomeBase>
  );
}

export default Home;
