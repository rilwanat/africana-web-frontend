import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { navData } from '../../lib/GuestNavData';
import styles from './GuestSideNav.module.css';

import logginImgTwo from '../../../assets/logo.png';
import logo from '../../../assets/zlogo.png';

const NavBar = () => {
  const [open, setOpen] = useState(true);
  const [institutionLogo, setInstitutionLogo] = useState('');
  const [storedName, setStoredName] = useState('');
  const [activeLink, setActiveLink] = useState('');

  const toggleOpen = () => {
    setOpen(!open);
  };

  const handleItemClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const storedLogo = "https://gacsstage.zaptrance.ng/" + localStorage.getItem('institution_logo');
    const storedName = localStorage.getItem('user_name');

    if (storedLogo) {
      setInstitutionLogo(storedLogo);
      setStoredName(storedName);
    }
  }, []);

  return (
    <div className={`${open ? styles.sidenav : styles.sidenavClosed} border`}>
      
      <img className="w-56 h-20 object-scale-down" src={logginImgTwo} alt="" />
      <img className="w-64 h-36 object-scale-down pb-4" src={institutionLogo} alt="" />
      {/* <img className="w-64 h-36 object-scale-down" src={nuhu} alt="" /> */}
      <h1 style={{fontSize: '18px', fontWeight: 'bold' }}  className='text-center pb-4'>{storedName}</h1>

      {/* <button className={styles.menuBtn} onClick={toggleOpen}>
        {open ? <KeyboardDoubleArrowLeftIcon /> : <KeyboardDoubleArrowRightIcon />}
      </button> */}
      
      {navData.map((item) => (
        <NavLink 
        key={item.id}
        className={`${styles.sideitem} ${activeLink  === item.link ? styles.activeLink : ''}`}
        style={item.text === "Logout" ? { color: "red" } : {}}
        // activeClassName={styles.activeLink}
        onClick={() => handleItemClick(item.link)}
        to={`/${item.link}`}
        >
          {item.icon}
          <span className={styles.linkText} style={item.text === "Logout" ? { color: "red" } : {}}>
            {item.text}</span>
        </NavLink>
      ))}
      <div className='bottom-0 w-full bg-opacity-0 pt-20 text-center text-xs m-3'>
        <div><img src={logo} alt='Logo' className='mb-2' style={{ width: '50%', height: 'auto' }}/></div>
        <div>Powered by rbapps</div>
        </div>
    </div>
  );
};

export default NavBar;