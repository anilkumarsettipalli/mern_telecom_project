import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Main } from './Main';
import { Add } from './Add';
import { Edit } from './Edit';


const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        
       <Route exact path='/' element={<Add />}> </Route>
       <Route exact path='/list' element={<Main />}></Route>
       <Route exact path='/edit' element={<Edit />}></Route> 
       
        </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
