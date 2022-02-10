import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './components/Input';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/set' element={<Input />} />
        <Route path='*' element={<Main/>} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

