import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='main-text'>
        <h1>Leave Management System</h1>
      </div>
    </div>
  );
};

export default Home;
