import { ReactElement } from 'react';
import CardItem from './CardItem';

import './index.css';

function Cards(): ReactElement {
  return (
    <div className="cards">
      <h1>All images are AI-generated!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem src="/images/chromatic-cat.png"/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;