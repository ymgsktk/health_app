import React, { useState } from 'react';
import '../App.css';

interface LoginProps {
  onSubmit: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
  };*/

  const handleLogin = () => {
    const predefinedEmail = 'yamagishi@rikkeisoft.com';
    const predefinedPassword = '12345678';

    if (email != predefinedEmail && password != predefinedPassword){
      alert('Invalid email and password')
    }else
    if (email != predefinedEmail){
      alert('Invalid email')
    }else
    if(password != predefinedPassword) {
      alert('Invalid password');
    }else
    if (email === predefinedEmail && password === predefinedPassword) {
      alert('Correct');
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
          <input type="text" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
          <button className="login-button" onClick={handleLogin}>Login</button>
          <a href="/" className="forgot-password">Forgot password?</a>
          <button className="create-account">Create new account</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
