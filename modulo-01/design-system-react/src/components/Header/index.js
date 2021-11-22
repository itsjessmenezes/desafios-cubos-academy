import './style.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dark.svg';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="info-site">
        <ul>
          <li onClick={() => navigate('/')} className="li">home</li>
          <li onClick={() => navigate('/portfolio')} className="li">portfolio</li>
          <li onClick={() => navigate('/contact')} className="li">contato</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
