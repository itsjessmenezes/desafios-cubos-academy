import './style.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import github from '../../assets/icons/github-dark.svg';
import twitter from '../../assets/icons/twitter-dark.svg';
import linkedin from '../../assets/icons/linkedin-dark.svg';

function Contact() {
  // const navigate = useNavigate();

  return (
    <div>
      <div className="page-contact">
        <Header />
        <main>
          <div className="divisor-contact"></div>
          <div className="contact-up">
            <div className="info-contact">
              <h2 className="h2">Entre em Contato</h2>
              <p className="body2">Eu adoraria escutar sobre seu trabalho atual e como eu poderia ajudar. Atualmente estou procurando por um cargo e aberto para várias oportunidades. Minha preferência é uma oportunidade em uma empresa Britânica. Mas também estou feliz em escutar sobre oportunidades remotas. Sou uma pessoa trabalhadora e positiva que sempre fará as tasks com um senso de propósito e atenção aos detalhes. Fique livre para checar meu perfis abaixo e entrar em contato utilizando o formulário.</p>
            </div>
            <div className="social-media">
              <img src={github} alt="Github" />
              <img src={twitter} alt="Twitter" />
              <img src={linkedin} alt="Linkedin" />
            </div>
            <div className="divisor-contact"></div>
          </div>
          <div className="contact-down"></div>

          <section className="section-contact">
            <div className="text-contact">
              <h2 className="h2">Contato</h2>
            </div>
            <form className="input-contact" >
              <label>
                Nome
                <input type="text" />
              </label>
              <label>
                E-mail
                <input type="email" />
              </label>
              <label>
                Mensagem
                <input className="mensagem" type="text" />
              </label>
              <div className="button primary-btn btn-send-contact">enviar</div>
            </form>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
