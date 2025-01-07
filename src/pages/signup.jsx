import React, { useState } from 'react';
import '../styles/signin+login.css';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstN, setFirstN] = useState('');
  const [lastN, setLastN] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSignUp(e) {
      e.preventDefault();
      setError('');

      try {
          const response = await fetch('http://localhost:5000/api/auth/signup', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
          });

          const data = await response.json();
          if (response.ok) {
              alert('Sign-up successful. Please sign in.');
              navigate('/login');
          } else {
              setError(data.error || 'Sign-up failed.');
          }
      } catch (err) {
          setError('Error connecting to server.');
      }
  }

return(
    <div className="sign">
    
<form action="signup-1.html" method="post">
      
      <h2>NutriForge</h2><br></br>
      <h3>Sign Up</h3>
      
      <div className="form">
      <input className="sl"  type="text" id="first_name" placeholder="First Name" required
      value={firstN} onChange={(e) => setFirstN(e.target.value)}/><br></br>
      <input className="sl"  type="text" id="last_name" placeholder="Last Name" required
      value={lastN} onChange={(e) => setLastN(e.target.value)}/><br></br>
      
      <input className="sl"  type="email" id="email" placeholder="E-mail" 
      required value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
      <input className="sl"  type="password" id="password" placeholder="Password" required
      value={password} onChange={(e) => setPassword(e.target.value)}/><br></br>
      </div>
      
      <label for="robot">
            <input  type="checkbox" id="robot" required/> I'm not a robot.
        </label><br></br>
      
      <label for="privacy">
            <input  type="checkbox" id="privacy" required/> By selecting "Create Account", 
            you are confirming that you have read and agree to NutriForge's 
            <a href="/policies/Terms and Conditions.pdf">Term of use</a> and <a href="/policies/Privacy Policy.pdf">Privacy Policy</a>.
        </label><br></br><br></br>

        {error && <p>{error}</p>}
        
        <button type="submit">Create Account</button><br></br>
        
        <p> Already have an account? <a href="/login">Log in.</a></p>
        
    </form>
  </div>
);
};

export default SignupPage;