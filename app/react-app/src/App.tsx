import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-page">
        <div className="login-header">
          <h1>facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
        <div className="login-form">
          <input type="text" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="login-button">Login</button>
          <a href="/" className="forgot-password">Forgot password?</a>
          <button className="create-account">Create new account</button>
        </div>
      </div>
    </div>
  );
}

export default App;
