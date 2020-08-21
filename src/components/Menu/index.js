import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import StoreContext from '../Store/Context';
// import Button from '../Button';

function Menu() {
  const { setToken, token } = useContext(StoreContext);
<<<<<<< HEAD
  const isCadVideos = window.location.pathname === '/cadastro/video';

=======
>>>>>>> dd18142d448830a255dff2023a9a9e21aeaa61dc
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo do SergioFlix" />
      </Link>
<<<<<<< HEAD
      {!isCadVideos && (
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          {token != null ? 'Cadastrar Video' : 'Login'}
        </Button>
      )}
=======
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        {token != null ? 'Cadastro' : 'Login'}
      </Button>
>>>>>>> dd18142d448830a255dff2023a9a9e21aeaa61dc
      {token != null
      && (
      <Button as={Link} className="ButtonLink" to="/" type="button" onClick={() => setToken(null)}>
        Logout
      </Button>
      )}
    </nav>
  );
}

export default Menu;
