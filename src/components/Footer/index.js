import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo2.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo SergioFlix" />
      </a>
      <p>
        Sergio Junior ❤
      </p>
    </FooterBase>
  );
}

export default Footer;
