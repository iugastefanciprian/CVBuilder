import { MdEmail, MdPassword } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import React, { useState } from 'react';

import '../../styles/Authentication/Authentication.css';

const Authentication = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
        <div className="inputs">
          {action === 'Login' ? (
            <></>
          ) : (
            <div className="input">
              <FaUser />
              <input type="user" placeholder="Username" name="user" />
            </div>
          )}
          <div className="input">
            <MdEmail />
            <input type="email" placeholder="Email" name="email" />
          </div>
          <div className="input">
            <MdPassword />
            <input type="password" placeholder="Password" name="password" />
          </div>
        </div>
      </div>
      <div className="forgot-password">
        Forgotten Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div
          className={action === 'Login' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Sign Up');
          }}
        >
          Sign Up
        </div>
        <div
          className={action === 'Sign Up' ? 'submit gray' : 'submit'}
          onClick={() => {
            setAction('Login');
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Authentication;
