import React from 'react';

const LoginPage = () => {
    

    return (

       
            <form>
             <div className='div1'>
             <h1>Login </h1>
            <h5 id= 'msg'>Welcome Back!</h5>
                <div>
                <label> CODE ID</label><br/>
                    <input type="text" name="username" />
                </div><br/>
                <div>
                <label>Password</label><br/>
                    <input type="password" name="password" />
                </div><br/>
                <input type='checkbox' required/>
                Remember me!<br/>
                <button type="submit" id='bt' >Login</button>
                
          
                </div>
            </form>
        
        
    );
};

export default LoginPage;
