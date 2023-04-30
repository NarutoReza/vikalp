import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nave from './Nave'
import Home from './component/Home';
import Formm from './component/Formm';
import List from './component/List';
import Admit from './component/Admit';

function App(){
  return(
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nave />}>
            <Route index element={<Home />} />
            <Route path='/download-admit' element={<Formm />} />
            <Route path='/list' element={<List />} />
            <Route path='/admit' element={<Admit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
