import { ReactElement } from 'react';
import Home from './Home';

export enum PAGENAMES {
  HOME = 0,
  ABOUT,
  PRODUCTS
}

const PAGES: Array<{url: string, name: string, Component?: (() => ReactElement) | undefined}> = [
  { url: '/', name: 'Home', Component: Home},
  { url: '/about', name: 'About', Component: undefined},
  { url: '/products', name: 'Products', Component: undefined},
] as const;

export default PAGES;