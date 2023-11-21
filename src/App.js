import React from 'react';
import { BrowserRouter , Routes, Route,   } from 'react-router-dom';

import Favourite from './Faavourite.js'
import  SinglePage from './SinglePage.js';



function App () {
  return(
    <>
  <BrowserRouter>
  <div>
  <Routes>
    <Route path='/' element={<SinglePage/>}/>
    <Route path='/txt' element={<Favourite/>}/>
    

  </Routes>
  </div>
  </BrowserRouter>
  </>
  )
};

export default App;
