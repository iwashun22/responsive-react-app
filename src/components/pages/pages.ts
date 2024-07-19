import { ReactElement } from 'react';
import Home from './Home';
import About from './About';
import Products from './Products';
import SignUp from './SignUp';

export enum PAGENAMES {
  HOME,
  ABOUT,
  PRODUCTS,
  SIGNUP
}

const PAGES: Record<PAGENAMES, {url: string, name: string, Component?: (() => ReactElement) | undefined}> = {
  [PAGENAMES.HOME]: { 
    url: '/', 
    name: 'Home', 
    Component: Home 
  },
  [PAGENAMES.ABOUT]: { 
    url: '/about', 
    name: 'About', 
    Component: About 
  },
  [PAGENAMES.PRODUCTS]: { 
    url: '/products', 
    name: 'Products', 
    Component: Products 
  },
  [PAGENAMES.SIGNUP]: {
    url: '/sign-up',
    name: 'Sign Up',
    Component: SignUp
  }
 } as const;

export default PAGES;