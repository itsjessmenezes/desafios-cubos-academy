import '../pages.css';

import manage from '../../assets/portfolio/manage/image-manage-hero.jpg'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from './components/Section';
import Navigation from './components/Navigation';
import CallToAction from '../../components/CallToAction';

function Manage() {
  return (
    <div>
      <div className="page">
        <Header />
        <img className="img-cover" src={manage} alt="Manage" />
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

export default Manage;
