import '../../section.css';
import { useNavigate } from 'react-router-dom';

import prev1 from '../../../assets/portfolio/insure/image-insure-preview-1.jpg'
import prev2 from '../../../assets/portfolio/insure/image-insure-preview-2.jpg'

function Section() {
  const navigate = useNavigate();
  return (
    <section className="section">
      <div className="left-info-side">
        <div className="divisor-info-side"></div>
        <h2 className="h2 title">Insure</h2>
        <p className="body1 description">Esse projeto me fez criar uma landing page responsiza de acordo com o design que recebi. Usei HTML5, CSS Grid e JavaScript para as áreas interativas, como o slider de testimoniais.</p>
        <p className="body1 info-description">Interaction Design / Front End Development</p>
        <p className="body1 info-description">HTML / CSS / JS</p>
        <div onClick={() => navigate('/')} className="button secondary-btn btn-visit">visitar</div>
        <div className="divisor-info-side"></div>
      </div>

      <div className="right-info-side">
        <div className="project">
          <h3 className="h3 project">Projeto</h3>
          <p className="body2 project">Este projeto foi um desafio de front-end do Frontend Mentor.  É uma plataforma que te faz práticar construindo websites  a partir de um design e casos de usuário. Cada desafio contém designs mobile e desktop para ilustrar como o website seria em diferentes tamanhos de tela. Criar esses projetos me ajudou a refinar meu fluxo de trabalho e resolver problemas de código da vida real. Eu aprendi algo novo com cada projeto, me ajudando a melhorar e adaptar meu estilo.</p>
        </div>
        <div className="previews">
          <h3 className="h3 preview">Previews Estáticos</h3>
          <img src={prev1} alt="Page" />
          <img src={prev2} alt="Page" />
        </div>
      </div>
    </section>
  )
}
export default Section;