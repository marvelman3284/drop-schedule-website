import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Input';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Days from './components/Days';
import './css/all.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/set' element={<Input />} />
        <Route path='*' element={<Main/>} />
        <Route path='/classes' element={<Days/>} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

