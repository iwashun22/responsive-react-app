import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PAGES, { PAGENAMES as P } from './components/pages/pages'

import './global/global.css';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes location={PAGES[P.HOME].url}>
        <Route path={PAGES[P.HOME].url} Component={PAGES[P.HOME].Component}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
