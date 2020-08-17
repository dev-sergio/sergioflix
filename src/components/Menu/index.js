import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import StoreContext from '../Store/Context';
// import Button from '../Button';

function Menu() {
  const { setToken } = useContext(StoreContext);
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo do SergioFlix" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
      <Button as={Link} className="ButtonLink" to="/" type="button" onClick={() => setToken(null)}>
        Logout
      </Button>
    </nav>
  );
}

export default Menu;
