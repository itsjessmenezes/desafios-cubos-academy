import '../../navigation.css';
import { useNavigate } from 'react-router-dom';

import arrowBack from '../../../assets/icons/arrow-left.svg';
import arrowNext from '../../../assets/icons/arrow-right.svg';

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="navigation">
      <div className="divisor-navigation"></div>
      <div className="navigation-info">
        <div onClick={() => navigate('/portfolio/manage')} className="preview-side">
          <div className="img-prev">
            <img src={arrowBack} alt="Back" />
          </div>
          <div className="info-page">
            <h3 className="h3">Manage</h3>
            <p className="body2">Projeto Anterior</p>
          </div>
        </div>

        <div onClick={() => navigate('/portfolio/insure')} className="next-side">
          <div className="info-page">
            <h3 className="h3">Insure</h3>
            <p className="body2">Próximo Projeto</p>
          </div>
          <div className="img-prev">
            <img src={arrowNext} alt="Back" />
          </div>
        </div>
      </div>
      <div className="divisor-navigation"></div>
    </div>
  )
}
export default Navigation;