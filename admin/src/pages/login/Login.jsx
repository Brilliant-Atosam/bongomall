import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/apiCalls';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleLogin = e => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div>
      <input
        placeholder='username'
        type='text'
        onChange={e => setUsername(e.target.value)}
      />
      <input
        placeholder='passworf'
        type='password'
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} style={{ cursor: 'pointer' }}>
        Sign in
      </button>
    </div>
  );
}

export default Login;
