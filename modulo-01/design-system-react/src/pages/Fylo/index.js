import '../pages.css';

import fylo from '../../assets/portfolio/fylo/image-fylo-hero.jpg'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from './components/Section';
import Navigation from './components/Navigation';
import CallToAction from '../../components/CallToAction';

function Fylo() {
  return (
    <div>
      <div className="page">
        <Header />
        <img className="img-cover" src={fylo} alt="Fylo" />
        <main>
          <Section />
          <Navigation />
        </main>
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default Fylo;
