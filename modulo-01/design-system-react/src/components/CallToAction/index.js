import './style.css';
import { useNavigate } from 'react-router-dom';

function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="cta">
      <div className="interested">
        <h2 className="h2" >Interessado em fazer projetos comigo?</h2>
      </div>
      <div onClick={() => navigate('/contact')} className="button secondary-btn btn-contact">contato</div>
    </section>
  );
}

export default CallToAction;
