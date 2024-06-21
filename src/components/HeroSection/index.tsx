import { ReactElement } from 'react';
import Button from '../Button';
import { FaAngleRight } from 'react-icons/fa';

import '../../global/global.css';
import './HeroSection.css';

function HeroSection(): ReactElement {
  return (
    <div className="hero-container">
      <h1>Responsive Website</h1>
      <p>This project was created using ReactJS</p>
      <div className="hero-btn-container">
        <Button
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          className={["hero-btn"]}
        >
          {"Get Started".toUpperCase()}
        </Button>
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          className={["hero-btn"]}
        >
          {"Join us".toUpperCase()} 
          <FaAngleRight className='btn-icon'/>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection;