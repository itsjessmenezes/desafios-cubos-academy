import '../pages.css';

import insure from '../../assets/portfolio/insure/image-insure-hero.jpg'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from './components/Section';
import Navigation from './components/Navigation';
import CallToAction from '../../components/CallToAction';

function Insure() {
  return (
    <div>
      <div className="page">
        <Header />
        <img className="img-cover" src={insure} alt="Insure" />
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

export default Insure;
