import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './register/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login/Login';
import PageWithForms from './pages/PageWithForms';
import FirstTest from './test-1/FirstTest';
import { Provider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <BrowserRouter>

      <Routes>

      <Route path='/' element={<Register></Register>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/' element={<Register></Register>}></Route>
      <Route path='/page-with-forms' element={<PageWithForms></PageWithForms>}></Route>
      <Route path='/first-test' element={<FirstTest></FirstTest>}></Route>

      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your Register, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
