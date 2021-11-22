import './style.css';
import '../../global.css';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import AboutMe from './components/AboutMe';
import CallToAction from '../../components/CallToAction';

function Home() {

  return (
    <div>
      <div className="home">
        <Header />
        <Hero />
        <AboutMe />
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
