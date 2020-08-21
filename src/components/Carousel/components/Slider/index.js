import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    background: rgba(255, 255, 255, 0.2);
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }

  &:hover div{
    opacity: 1;
  }
`;

const Arrow = styled.div`
  opacity: 0;

  svg{
    height: calc(100% - 32px);
    width: 40pt;
    margin-bottom: 16px;
    margin-top: 16px;
  }
`;

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <Arrow>
      <Icon
        path={mdiChevronRight}
        title="Próximo"
        color="white"
        className={`shadow ${className}`}
        onClick={onClick}
      />
    </Arrow>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Arrow>
      <div>
        <Icon
          path={mdiChevronLeft}
          title="Anterior"
          // size={2.5}
          color="white"
          className={`shadow ${className}`}
          onClick={onClick}
        />
      </div>
    </Arrow>
  );
}

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 500,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      swipeToSlide: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
