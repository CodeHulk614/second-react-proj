import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import MainComp from "./MainComp"
import Footer from "./Footer"
import css from "./dist/css/bootstrap.min.css"

function DispLay(){
  return(
    <div>
      <Header />
      <MainComp />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DispLay />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

