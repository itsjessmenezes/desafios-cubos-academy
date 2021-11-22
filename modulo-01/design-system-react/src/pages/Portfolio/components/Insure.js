import './style.css';
import { useNavigate } from 'react-router-dom';
import insure from '../../../assets/portfolio/insure/image-portfolio-insure.jpg';

function Insure() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="img-side">
        <img src={insure} alt="Insure" />
      </div>
      <div className="text-side">
        <div className="divisor-container"></div>
        <h2 className="h2">Insure</h2>
        <p className="body1">Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
        <div onClick={() => navigate('/portfolio/insure')} className="button secondary-btn btn-view-project">ver projeto</div>
        <div className="divisor-container"></div>
      </div>
    </div>
  );
}

export default Insure;
