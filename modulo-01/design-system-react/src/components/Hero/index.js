import './style.css';
import { useState } from 'react';
import hero from '../../assets/home/image-homepage-hero.jpg';
import downArrowGreen from '../../assets/icons/down-arrows.svg';
import downArrowWhite from '../../assets/icons/down-arrows-white.svg';

function Hero() {
  const [imgHover, setImgHover] = useState(false);

  return (
    <div className="hero">
      <img className="img-hero" src={hero} alt="Hero" />
      <div className="info-hero">
        <h1 className="info-hero-h1 h1">Olá, me chamo Alex Spencer e eu amo construir websites lindos</h1>
        <div
          className="primary-btn btn-about"
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
        >
          <div className="btn-arrow-down">
            <img
              className="icon-arrow-down"
              src={imgHover ? downArrowWhite : downArrowGreen}
              alt="Icon"
            />
          </div>
          <span className="button btn-about-me">sobre mim</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
