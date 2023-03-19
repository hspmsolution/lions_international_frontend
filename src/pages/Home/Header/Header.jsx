import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className='head-dist-h'>
      <Link to="/"><img className="logoImg" src={'/assets/img/logo2.png'} alt="Lions Club" /></Link>
      <div>
        <div className='head-lions-i'>LIONS CLUB INTERNATIONAL</div>
        <div className='head-dist-num'>DISTRICT 317-F</div>
      </div>
    </div>
  )
}

export default Header
