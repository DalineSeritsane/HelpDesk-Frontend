import React, { useState } from 'react';

import "./entry.css";
import Login from "../../components/login/Login";
import PasswordReset from '../../components/password-reset/PasswordReset';

const Entry = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formLoad, setFormLoad] = useState('login');

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }

    console.log(name, value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return alert("Fill up the form!");
    }
    //Too call api to submit the form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();

    if(!email) {
      return alert('Enter email address!')
    }
    console.log(email);
  };

  const formSwitcher = formType =>{
    setFormLoad(formType);

  }
  
  return (
    <div>
      <div className='entry-page'>
        <div className='form-box'>
          
       {formLoad === 'login' && <Login 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        password={password}
      /> } 
      
      {formLoad === 'reset' &&   <PasswordReset 
        handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
       
      /> }

      </div>
      </div>
    </div>
  );
};

export default Entry;
