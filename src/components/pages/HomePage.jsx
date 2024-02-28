import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import logo from '../../assets/logos/Logo Wordmark 1.png';

export default function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Any initialization logic can go here
  }, []);

  return (
    <div>
      <nav className="bg-gray-900">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <IconButton
                edge="start"
                aria-label="menu"
                sx={{ color: 'white', marginRight: 2 }} 
              >
                <MenuIcon />
              </IconButton>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src={logo}
                  alt="Logo"
                  onClick={() => {navigate('/');}}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className="flex items-center">
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
          </div>
        </div>
      </nav>
    </div>
  );
}
