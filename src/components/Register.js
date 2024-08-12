import React, { useState } from 'react';
import registerimg from './images/regimg.jpg';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '') {
      setMessage({ type: 'error', text: 'Please Enter UserName' });
    } else if (password.length < 6) {
      setMessage({
        type: 'error',
        text: 'Password must be greater than 6 letters',
      });
    } else if (password !== confirmPassword) {
      setMessage({
        type: 'error',
        text: 'Please ensure password and confirm password are the same',
      });
    } else {
      setMessage({
        type: 'success',
        text: 'Congrats! Successfully Registered',
      });
      // Submit the form data
      console.log('Form submitted:', { name, email, password });
    }
  };

  return (
    <div className="container">
        <div className="register">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-4">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Your Name</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Your Email</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>Password</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <label>Re-Enter your password</label>
              </div>
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <label className="form-check-label">
                  I agree to all statements in{' '}
                  <span className="regtext">Terms and conditions</span>
                </label>
              </div>
            </div>
            {message.text && (
              <div
                style={{
                  color: message.type === 'error' ? 'red' : 'green',
                  fontSize: 18,
                  marginBottom: 10,
                }}
              >
                {message.text}
              </div>
            )}
            <button className="btn btn-info login-size" type="submit">
              REGISTER
            </button>
          </form>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <div className="register-img">
            <img src={registerimg} alt="logo" height="500px" width="100%" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Register;
