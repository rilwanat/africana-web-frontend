import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

import logo from '../../assets/logos/Logo Wordmark 1.png';
import logo2 from '../../assets/logos/Logo Wordmark.png';

const SlideInMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 1000; /* Ensure the menu is on top of other content */
  overflow-x: hidden;
`;

const MenuContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

// Define variants for menu items
const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3 } },
};

export default function HomePage() {
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery('(min-width:960px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Any initialization logic can go here
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-">
              {isLargeScreen ? (
                <div className="lg:flex flex-grow justify-between items-center">
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    MEN
                  </span>
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    WOMEN
                  </span>
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    ESSENTIALS
                  </span>
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    STORES
                  </span>
                  <span
                    className="text-white text-xs font-bold cursor-pointer mr-4"
                    onClick={() => { /* Handle navigation */ }}
                  >
                    ON SALE
                  </span>
                </div>
              ) : (
                <IconButton
                  edge="start"
                  aria-label="menu"
                  sx={{ color: 'white', marginRight: 2 }} 
                  onClick={toggleMenu}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </div>
            <div className="flex-grow flex items-center justify-center">
              <img
                className="block h-8 w-auto"
                src={logo}
                alt="Logo"
                onClick={() => {navigate('/');}}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="flex items-center">
              {isLargeScreen && (
                <div style={{ width: '300px' }} className="flex justify-end">
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <SearchIcon />
                  </IconButton>
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </div>
              )}
              {!isLargeScreen && (
                <div>
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <SearchIcon />
                  </IconButton>
                  <IconButton aria-label="search" sx={{ color: 'white' }}>
                    <ShoppingBagOutlinedIcon />
                  </IconButton>
                  <IconButton aria-label="shopping cart" sx={{ color: 'white' }}>
                    <AccountCircleOutlinedIcon />
                  </IconButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* Slide-in menu */}
      <SlideInMenu
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        transition={{ duration: 0.5 }}
      >
        <MenuContent>
          <div className='ml-8'>
            <div className='flex justify-between items-center mr-8'>
              <img
                className="block h-8 w-auto my-4"
                src={logo2}
                alt="Logo"
                onClick={() => {navigate('/');}}
                style={{ cursor: 'pointer' }}
              />
              <ArrowBackOutlinedIcon onClick={toggleMenu} style={{ cursor: 'pointer' }}/>
            </div>
            <hr className='mr-8'/>
            {/* Apply variants to each menu item */}
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              MEN
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              WOMEN
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              ESSENTIALS
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              STORES
            </motion.span>
            <motion.span
              variants={menuItemVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
              className="text-gray-900 text-sm font-bold cursor-pointer block my-4"
              onClick={() => { /* Handle navigation */ }}
            >
              ON SALE
            </motion.span>
          </div>
        </MenuContent>
      </SlideInMenu>
    </div>
  );
}
