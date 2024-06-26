import { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import './CardItem.css';

function CardItem({
  src,
  altText = "Image",
  text,
  label,
  path
}: {
  src: string,
  altText?: string,
  text: string,
  label: string,
  path: string,
}): ReactElement {
  return (
    <>
      <li className="cards--item">
        <Link to={path} className="cards--item--link">
          <figure className="cards--item--img--wrap" data-category={label}>
            <img src={src} alt={altText} className="cards--item--img" />
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