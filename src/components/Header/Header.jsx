import { Link } from 'react-router-dom';
import './Header.css';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <div className="header-container">
      <div className="header">
        <Link to={'/'} className="title">
          <h1>{title}</h1>
        </Link>
      </div>
      <div className="btn-area">
        <Link to={'/about'} className="link">
          <button>Sobre mi</button>
        </Link>
        <Link to={'/categorias'} className="link">
          <button>Ver categorías</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
