import { useState } from 'react';

import Button from '../shared/Button';
import FormField from '../shared/FormField';
import { login } from './service';

import './LoginPage.css';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const resetError = () => {
    setError(null);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    resetError();
    setIsLoading(true);
    try {
      await login(credentials);
      setIsLoading(false);
      // Logged in
      onLogin();
      // Redirect to pathname
      const to = location.state?.from?.pathname || '/';
      navigate(to);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const buttonDisabled =
    isLoading || !credentials.username || !credentials.password;

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="username"
          label="phone, email or username"
          className="loginForm-field"
          onChange={handleChange}
          value={credentials.username}
        />
        <FormField
          type="password"
          name="password"
          label="password"
          className="loginForm-field"
          onChange={handleChange}
          value={credentials.password}
        />
        <Button
          type="submit"
          variant="primary"
          className="loginForm-submit"
          disabled={buttonDisabled}
        >
          Log in
        </Button>
        {/* <input
          type="file"
          name="photo"
          onChange={event => {
            console.log(event.target.files[0]);
          }}
        /> */}
      </form>
      {error && (
        <div onClick={resetError} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
