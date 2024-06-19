import { ReactElement, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'] as const;
type BUTTON_STYLES = typeof STYLES[number];
const SIZES = ['btn--medium', 'btn--large'] as const;
type BUTTON_SIZES = typeof SIZES[number];

function Button({ 
  children = "button",
  type = undefined,
  style = {},
  onClick = () => {},
  buttonStyle = 'btn--primary',
  buttonSize = 'btn--medium'
}: PropsWithChildren<{
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"], 
  style?: ButtonHTMLAttributes<HTMLButtonElement>["style"],
  onClick?: () => void, 
  buttonStyle?: BUTTON_STYLES,
  buttonSize?: BUTTON_SIZES
}>): ReactElement {
  return (
    <>
      <Link to="sign-up" className="btn-mobile">
        <button 
          className={`btn ${buttonStyle} ${buttonSize}`}
          onClick={onClick}
          type={type}
          style={style}
        >
          {children}
        </button>
      </Link>
    </>
  )
}

export default Button;