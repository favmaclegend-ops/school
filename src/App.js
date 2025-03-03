import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import React from 'react';
import MyForm from './MyForm';
import SuccessPage from './SuccessPage';
import LoginPage from './LoginPage';
import Home1 from './Home1';
import Home from './home';
import About from './About';
import Contact from './contact';
import Sidebar from './Sidebar';
import Notes from './notes';
import Issues from './issues';

const App = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';

  const shouldRenderSidebar = !isHomePage && !isLoginPage && !isSignupPage;

  return (
    <div className="app">
      {shouldRenderSidebar && <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home1 />} />
          <Route path="/note" element={<Notes />} />
          <Route path="/support" element={<About />} />
          <Route path="/feedback" element={<Contact />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<MyForm />} />
        </Routes>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
