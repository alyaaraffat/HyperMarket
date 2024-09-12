import React, { useState } from 'react';

interface FormState {
  username: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ username: '', email: '', password: '' });
  const [error, setError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, email, password } = formState;

    if (!username || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Handle authentication
    console.log('Submitted:', formState);
    setError(null);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-wrapper">
      <div className="image-section">
        <img  />
      </div>
      <div className="form-section">
        <div className="headText">
          <h2>Hyper Market</h2>
          <h6>Welcome Back</h6>
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                name="password"
                value={formState.password}
                onChange={handleChange}
              />
              <i
                className={`fas ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                onClick={togglePasswordVisibility}
                role="button"
                aria-label={passwordVisible ? 'Hide password' : 'Show password'}
              ></i>
            </div>
          </div>
          <div className="btn-p">
            <button type="submit">Login</button>
            <p className="signup">
              Don’t Have an Account? <a href="/Register">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
