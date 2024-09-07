import React, { useState } from 'react';

interface FormState {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ 
    firstName: '', 
    lastName: '', 
    username: '', 
    email: '', 
    password: '', 
    confirmPassword: '' 
  });
  const [error, setError] = useState<string | null>(null);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword } = formState;

    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Handle registration
    console.log('Registered:', formState);
    setError(null);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="register-wrapper">
      <div className="image-section">
        <img/>
      </div>
      <div className="form-section">
        <div className="headText">
          <h2>Hyper Market</h2>
          <h6>Create an Account</h6>
        </div>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
            />
          </div>
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
          <div className="password-container">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
              />
              <i
                className={`fas ${confirmPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}
                onClick={toggleConfirmPasswordVisibility}
                role="button"
                aria-label={confirmPasswordVisible ? 'Hide password' : 'Show password'}
              ></i>
            </div>
          </div>
          <div className="btn-p">
            <button type="submit">Register</button>
            <p className="login">
              Already Have an Account? <a href="./login">Log In</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
