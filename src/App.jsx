import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HomePage from './pages/home_page';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import MenuPage from './pages/menu_page';
import ProfilePage from './pages/profile_page';
import RecipesPage from './pages/recipes_page';


const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<SignupPage />} />
              <Route path="/menupage" element={<MenuPage />} />
              <Route path="/profilepage" element={<ProfilePage />} />
              <Route path="/recipespage" element={<RecipesPage />} />
              
          </Routes>
      </Router>
  );
};

export default App
