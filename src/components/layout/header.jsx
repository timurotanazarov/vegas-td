import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assets/icons/SearchIcon';
import PodarokIcon from '../../assets/icons/PodarokIcon';
import Logo from '../../../public/images/Logo.jpg';
import { MenuOutlined } from '@ant-design/icons';

function header() {

  const [modal, setModal] = useState(false);
    function togglDropdown(){
        setModal(!modal)
    }
    
    useEffect(function(){
        togglDropdown
    },[modal])

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
            <div className="header-menu">
            <MenuOutlined width={28} height={28} onClick={togglDropdown}/>
            </div>
            <div className="header-podarok">
            <PodarokIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={modal? 'header-drawer active':'header-drawer'}>
        <a href="#banner" className="header-drawer__link">Каталог</a>
        <a href="#cards" className="header-drawer__link">Галерея</a>
        <a href="#" className="header-drawer__link">О лаборатории</a>
        <a href="#" className="header-drawer__link">Контакты</a>
      </div>
    </div>
  )
}

export default header;