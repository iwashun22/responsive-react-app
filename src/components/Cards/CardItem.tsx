import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './CardItem.css';

function CardItem({
  src,
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  label = "Art",
  path = "/"
}: {
  src: string,
  text?: string,
  label?: string,
  path?: string,
}): ReactElement {
  return (
    <>
      <li className="cards--item">
        <Link to={path} className="cards--item--link">
          <figure className="cards--item--img--wrap" data-category={label}>
            <img src={src} alt="AI-generated Cat Image" className="cards--item--img" />
          </figure>
          <div className="cards--item--info">
            <h5 className="cards--item--text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem;