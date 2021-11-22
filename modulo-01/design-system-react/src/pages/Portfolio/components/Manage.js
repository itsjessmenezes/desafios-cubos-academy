import './style.css';
import { useNavigate } from 'react-router-dom';
import manage from '../../../assets/portfolio/manage/image-portfolio-manage.jpg';

function Manage() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="img-side">
        <img src={manage} alt="Manage" />
      </div>
      <div className="text-side">
        <div className="divisor-container"></div>
        <h2 className="h2">Manage</h2>
        <p className="body1">Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
        <div onClick={() => navigate('/portfolio/manage')} className="button secondary-btn btn-view-project">ver projeto</div>
        <div className="divisor-container"></div>
      </div>
    </div>
  );
}

export default Manage;
