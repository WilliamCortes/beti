import React from 'react';
import { NavBar } from './NavBar';
import '../styles/home.css';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <div className='home'>
      <NavBar />
      <div className='home_section'>
        <h2> Bienvenido a Beti</h2>
      <Link to='/betitest'> Accercer al Test</Link> 


      </div>

    </div>
  )
}
