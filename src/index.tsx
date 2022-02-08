import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Input from './components/Input';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GetCourses } from './components/helpers/SetCourse';
import Main from './components/Main';
/* TODO:
Check if there is something in local storage
if there is then route to /schedule --> list of classes and (edit button --> goes to /setClass)
else route to /setClass
*/


console.debug(GetCourses());
console.log(typeof GetCourses());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/set' element={<Input />} />
        <Route path='/' element={<Main/>} />
      </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
