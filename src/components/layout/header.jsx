import React from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import PodarokIcon from '../../assets/icons/PodarokIcon';
import Logo from '../../../public/images/Logo.jpg';

function header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-row">
          <div className="header-logo">
            <img src={Logo} alt="" />
          </div>
          <nav className="header-navbar">
            <a href="#banner" className="header-link">Каталог</a>
            <a href="#cards" className="header-link">Галерея</a>
            <a href="#" className="header-link">О лаборатории</a>
            <a href="#" className="header-link">Контакты</a>
          </nav>
          <div className="header-icons">
            <SearchIcon />
            <PodarokIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default header;