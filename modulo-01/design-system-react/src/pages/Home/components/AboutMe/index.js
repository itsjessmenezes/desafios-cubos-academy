import './style.css';
import { useNavigate } from 'react-router-dom';
import profile from '../../../../assets/home/image-homepage-profile.jpg'

function AboutMe() {
  const navigate = useNavigate();

  return (
    <section className="about-me">
      <div className="img-profile">
        <img src={profile} alt="Profile" />
      </div>
      <div className="info-about-me">
        <div className="divisor-about-me"></div>
        <h2 className="h2">Sobre mim</h2>
        <p className="body1">Sou um desenvolvedor front-end júnior procurando por uma oportunidade. Eu foco em escrever HTML acessível, usando práticas modernas de CSS e escrevendo um JavaScript limpo. Quando estou escrevendo código JavaScript, na maioria das vezes estou usando React, mas posso me adapta para qualquer ferramenta se necessário. Moro em Londres, UK, mas também seria feliz trabalhando remotamente e tenho experiência em times remotos. Quando não estou codando, poderá me achar fora de casa. Eu adoro estar próximo a natureza seja para uma caminhada, corrida ou ciclismo. Eu amaria se você desse uma olhada no meu trabalho.</p>
        <div onClick={() => navigate('/portfolio')} className="button secondary-btn btn-portfolio">ir para portfolio</div>
        <div className="divisor-about-me"></div>
      </div>
    </section>
  );
}

export default AboutMe;
