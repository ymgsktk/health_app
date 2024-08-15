import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH_URL, USER_INFO_DUM, userInfoDefault } from "../../utils/constant";
import './App.css';

const Login: React.FC = () => {
  const [userInfo, setUserInfo] = useState(userInfoDefault)
  const navigate = useNavigate();

  const handleLogin = () => {

    if (userInfo.email !== USER_INFO_DUM.email && userInfo.password !== USER_INFO_DUM.Password) {
      alert('Invalid email and password');
    } else if (userInfo.email !== USER_INFO_DUM.email) {
      alert('Invalid email');
    } else if (userInfo.password !== USER_INFO_DUM.Password) {
      alert('Invalid password');
    } else if (userInfo.email === USER_INFO_DUM.email && userInfo.password === USER_INFO_DUM.Password) {
      alert('Login successful');
      navigate('/home');
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
