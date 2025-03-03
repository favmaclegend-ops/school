import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const location = useLocation();
  const { fname, lname, codeid } = location.state || { fname: '', lname: '', codeid: '' };
  const navigate = useNavigate();
  const handleHome = () => {
    navigate('/Home1');
  };

  return (
    <div className='div1'>
      <h1>Welcome {codeid}</h1>
      <p>Hello, {fname} {lname}! Your form has been submitted successfully.</p>
      <header>
    <button type='button' onClick={handleHome}>Next</button>
    </header>
    </div>
    
  );
};

export default SuccessPage;
