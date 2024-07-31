import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PAGES, { PAGENAMES as P } from './components/pages/pages'

import './global/global.css';

const ROOT_PATH = "/responsive-react-app/";

function App() {
  return (
    <BrowserRouter basename={ROOT_PATH}>
      <Navbar/>
      <Routes>
        <Route 
          path={PAGES[P.HOME].url}
          Component={PAGES[P.HOME].Component}
        />
        <Route 
          path={PAGES[P.ABOUT].url} 
          Component={PAGES[P.ABOUT].Component}
        />
        <Route 
          path={PAGES[P.PRODUCTS].url} 
          Component={PAGES[P.PRODUCTS].Component}
        />
        <Route 
          path={PAGES[P.SIGNUP].url} 
          Component={PAGES[P.SIGNUP].Component}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
