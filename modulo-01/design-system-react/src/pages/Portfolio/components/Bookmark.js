import './style.css';
import { useNavigate } from 'react-router-dom';
import bookmark from '../../../assets/portfolio/bookmark/image-portfolio-bookmark.jpg';

function Bookmark() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="text-side">
        <div className="divisor-container"></div>
        <h2 className="h2">Bookmark</h2>
        <p className="body1">Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
        <div onClick={() => navigate('/portfolio/bookmark')} className="button secondary-btn btn-view-project">ver projeto</div>
        <div className="divisor-container"></div>
      </div>
      <div className="img-side">
        <img src={bookmark} alt="Bookmark" />
      </div>
    </div>
  );
}

export default Bookmark;
