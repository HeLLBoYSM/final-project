import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './register/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login/Login';
import PageWithForms from './pages/PageWithForms';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>

      <Routes>

      <Route path='/' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/' element={<Register></Register>}></Route>
      <Route path='/pagewithforms' element={<PageWithForms></PageWithForms>}></Route>

      </Routes>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your Register, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
