import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaStickyNote, FaUsers } from 'react-icons/fa';
import './bottomNav.css';

const BottomNav = () => {
  const location = useLocation();

  return (
    <div className="bottom-nav">
      <Link to="/chapters" >
        <FaHome />
        <span className='font-weight-700'>Home</span>
      </Link>
      <Link to="/chapters" className={location.pathname === '/chapters' ? 'active' : ''}>
        <FaBook />
        <span className='font-weight-700'>Quran</span>
      </Link>
      <Link to="/chapters">
        <FaStickyNote />
        <span className='font-weight-700'>Notes</span>
      </Link>
      <Link to="/chapters" >
        <FaUsers />
        <span className='font-weight-700'>People</span>
      </Link>
    </div>
  );
};

export default BottomNav;