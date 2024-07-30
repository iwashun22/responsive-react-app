import { ReactElement } from 'react';
import CardItem from './CardItem';

import './index.css';

type CARD =  Parameters<typeof CardItem>[0];
type OPTIONAL_CARD_TYPE<T extends keyof CARD> = {
  [P in T]?: CARD[P]
} & Omit<CARD, T>;

type CARD_LIST = Array<OPTIONAL_CARD_TYPE<"path" | "text" | "label">>;
const cardList: CARD_LIST = [
  {
    src: "/images/chromatic-cat.png",
    altText: "AI-generated Cat Image",
    path: "/products"
  }, {
    src: "/images/cosmic-car-race.png",
    label: "sci-fi",
    path: "/products"
  }, {
    src: "/images/pop-art-radio.png",
    label: "music",
    text: "Color your life with variety of music!"
  }, {
    src: "/images/ghibli-starlight.png",
    label: "anime",
    text: "Enjoy touching stories with a lot of beautiful graphics and scenes."
  }, {
    src: "/images/guy-watching-night-town.png",
    path: "/about"
  }
];

function Cards(): ReactElement {
  return (
    <div className="cards">
      <h1>All images are AI-generated!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            {
              cardList.map(({ src, altText, text, label, path }, index) => (
                <CardItem 
                  src={src}
                  altText={altText}
                  text={text ?? "Lorem ipsum dolor sit amet consectetur adipisicing elit."} 
                  label={label ?? "Art"}
                  path={path ?? "/"}
                  key={index}
                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;