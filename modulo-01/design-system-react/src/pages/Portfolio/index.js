import './style.css';
import '../../global.css';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Manage from './components/Manage.js';
import Bookmark from './components/Bookmark.js';
import Insure from './components/Insure.js';

function Portfolio() {

  return (
    <div>
      <div className="portfolio">
        <Header />
        <Manage />
        <Bookmark />
        <Insure />

      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
