import React from 'react';
import Login from './components/login';

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('ログインされたメールアドレス:', email, 'とパスワード:', password);
  };

  return (
    <div>
      <Login onSubmit={handleLogin} />
    </div>
  );
};

export default App;

