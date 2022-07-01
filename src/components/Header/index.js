// == Import
import './header.scss';
import Logo from 'src/assets/img/techtools-logo-white.png';

// == Composant
const Header = () => (
  <header className='header'>
        <img className="header-img" src={Logo} alt='logoTechTools'></img>
        <h1 className="header-title">TechTools</h1>
  </header>
);

// == Export
export default Header;
