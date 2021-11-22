import './style.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-light.svg';
import github from '../../assets/icons/github-light.svg';
import twitter from '../../assets/icons/twitter-light.svg';
import linkedin from '../../assets/icons/linkedin-light.svg';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="left">
        <img src={logo} alt="Logo" />
        <ul>
          <li onClick={() => navigate('/')} className="li">home</li>
          <li onClick={() => navigate('/portfolio')} className="li">portfolio</li>
          <li onClick={() => navigate('/contact')} className="li">contato</li>
        </ul>
      </div>
      <div className="right">
        <img src={github} alt="Github" />
        <img src={twitter} alt="Twitter" />
        <img src={linkedin} alt="Linkedin" />
      </div>
    </footer>
  );
}

export default Footer;
