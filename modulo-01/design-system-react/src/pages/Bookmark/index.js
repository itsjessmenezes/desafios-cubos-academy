import '../pages.css';

import bookmark from '../../assets/portfolio/bookmark/image-bookmark-hero.jpg'

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Section from './components/Section';
import Navigation from './components/Navigation';
import CallToAction from '../../components/CallToAction';

function Bookmark() {
  return (
    <div>
      <div className="page">
        <Header />
        <img className="img-cover" src={bookmark} alt="Bookmark" />
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

export default Bookmark;
