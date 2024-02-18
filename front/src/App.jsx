import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Users from './Users';
import UserAdd from './UserAdd';
import Read from './Read';
import Update from './Update';


function App() {

  return (
    <div className='app bg-emerald-600 w-screen h-screen flex justify-center items-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/add' element={<UserAdd />} />
          <Route path='/read/:id' element={<Read />} />
          <Route path='/update/:id' element={<Update />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
