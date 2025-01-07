import React, { useState } from 'react';
import '../styles/signin+login.css';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
      e.preventDefault();
      setError('');

      try {
          const response = await fetch('http://localhost:5000/api/auth/signin', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
          });

          const data = await response.json();
          if (response.ok) {
              localStorage.setItem('user_id', data.user_id); 
              navigate('/');
          } else {
              setError(data.error || 'Log-in failed.');
          }
      } catch (err) {
          setError('Error connecting to server.');
      }
  };

return(
    <div className="sign">
    <form action="login1.html" method="post">
      
      <h1>Welcome to NutriForge</h1><br></br>
      
      <b>Email address</b><br></br>
      <input className="sl"  type="text" id="email" placeholder="Enter yor email" required
      value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
      <b>Password</b> 
      <div className="psw">
        <a href="#">Forgot your password?</a>
        </div>
      <input className="sl"  type="password" id="password" placeholder="Enter your password" required
      value={password} onChange={(e) => setPassword(e.target.value)}/><br></br><br></br>

      <label for="remember">
            <input   type="checkbox" id="remember"/> Remember Me
        </label><br></br><br></br>
        
        {error && <p>{error}</p>}
        <button type="submit">Log In</button><br></br>
        
        <p> Don't have an account? <a href="/">Sign Up.</a></p>
        
        
    </form>
  </div>
);
};

export default LoginPage;