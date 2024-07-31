import Navbar from './components/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PAGES, { PAGENAMES as P } from './components/pages/pages'

import './global/global.css';

function App() {
  return (
    <HashRouter basename={import.meta.env.VITE_ROOT_PATH}>
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
    </HashRouter>
  )
}

export default App;
