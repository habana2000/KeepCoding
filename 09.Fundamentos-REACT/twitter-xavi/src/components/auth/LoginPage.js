import { useState } from 'react';
import Button from '../shared/Button';
import { login } from './service';

function LoginPage({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = async event => {
    event.preventDefault();
    await login(credentials);

    // Estoy logueado
    onLogin();
  };

  const handleChange = event => {
    // if (event.target.name === 'username') {
    //   setCredentials({ ...credentials, username: event.target.value });
    // }
    // if (event.target.name === 'password') {
    //   setCredentials({ ...credentials, password: event.target.value });
    // }
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const buttonDisabled = !credentials.username || !credentials.password;

  return (
    <div>
      <h1>Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={credentials.username}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button type="submit" variant="primary" disabled={buttonDisabled}>
          Log in
        </Button>
        <input
          type="file"
          name="photo"
          onChange={event => {
            console.log(event.target.files[0]);
          }}
        />
      </form>
    </div>
  );
}

export default LoginPage;
