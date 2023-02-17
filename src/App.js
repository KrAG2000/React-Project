import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/frontend/navigation';
import FrontPage from './components/frontend/frontPage';
import Registration from './components/frontend/login-js-subsections/registration';
import Login from './components/frontend/login-js-subsections/login';
import Footer from './components/frontend/footer';
import './App.css';

function App() {

  return (
    <div className="root">
      <div className="App">
        <Main />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <div className="parent-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
