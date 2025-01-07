import React, { useState } from 'react';
import SideBar from '../components/sidebar';
import '../styles/profile_page.css';
import { useNavigate } from 'react-router-dom';
const ProfilePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login'); 
    };

return(
    <div>
    <SideBar/>
          
    <div className="settings">
        <a className="link">Settings</a><br></br>
        <a className="link">Nutrition goals</a><br></br>
        <a className="link">Reports & Statistics</a><br></br>
        <a className="link" href="/policies/Terms and Conditions.pdf">Terms and </a><a className="link" href="/policies/Privacy Policy.pdf">privacy policy</a><br></br>
        <a className="link">Contact us</a><br></br>
        <a className="link" onClick={handleLogout}>Log Out</a><br></br>
    </div>
</div>
);
};
  
  export default ProfilePage;