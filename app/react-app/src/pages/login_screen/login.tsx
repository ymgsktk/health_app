import React, { useState } from 'react';
import axios from 'axios';
import Adapter from 'axios-mock-adapter'
import { useNavigate } from 'react-router-dom';
import { PATH_URL, USER_INFO_DUM, userInfoDefault } from "../../utils/constant";
import './App.css';
import { login } from '../../APIdata/API';

const mock = new Adapter(axios);

const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState(userInfoDefault)
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login(userInfo.email, userInfo.password);

      if(response && response.token){
        alert(response.message);
        localStorage.setItem('token', response.token);
        navigate('/');
      }else{
        alert(response.messageErr)
      }
      console.log('Login response:', response);  // レスポンスをログに出力
      
     
    } catch (error) {
      console.error('Login error:', error);
     //alert('Invalid email or password!!');
    }
  };
  

  return (
    <div className="App">
      <div className="login-page">
        <div className="login-header">
          <h1>facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
        <div className="login-form">
          <input
            type="text"
            placeholder="Email or phone number"
            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
          <a href="/" className="forgot-password">
            Forgot password?
          </a>
          <button className="create-account">Create new account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
