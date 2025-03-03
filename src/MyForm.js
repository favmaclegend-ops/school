import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  const [formData, setFormData] = useState({ fname: '', lname: '', codeid: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here

    // Redirect to another page with the name
    navigate('/success', { state: { fname: formData.fname, lname: formData.lname, codeid: formData.codeid } });
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className='pre'>
    <button id='btw' type="button" onClick={handleLogin}>Sign-in</button>
    <form onSubmit={handleSubmit}>
      <div className='div1'>
        <h1>Sign Up</h1>
        <div className='div2'>
          <label>First Name</label><br/>
          <input type="text" name="fname" value={formData.fname} onChange={handleChange} />
          <div className='div3'>
          <label>Last Name</label><br/>
          <input type="text" name="lname" value={formData.lname} onChange={handleChange} />
        </div>
          </div>
        <br /><br />
        <label>CODE ID</label><br/>
        <input type="text" name="codeid" value={formData.codeid} onChange={handleChange} />
        <br/><br/>
        <label>Password</label><br/>
        <input type='password' name='password' required/><br/><br/>
        <input type='checkbox' name='cheak' required/>
        Agree to all Term and conditions<br/><br/>
        <button type="submit">Submit</button>
       
      </div>
      </form>
   
    </div>
  );
};

export default MyForm;
