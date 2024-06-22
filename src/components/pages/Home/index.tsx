import { ReactElement } from 'react';
import HeroSection from '../../HeroSection';
import Cards from '../../Cards';

import '../../../global/global.css';
import './Home.css';

function Home(): ReactElement {
  return (
    <>
      <HeroSection />
      <Cards />
    </>
  )
}

export default Home;