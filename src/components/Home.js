import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/home.css';

export const Home = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout();
      history.push('/login');
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className='home'>
      <div className='home_logo'>
        <img src='https://i.imgur.com/fzFisPh.png' alt='Logo Beti' />
        <h1>beti</h1>
      </div>
      <div className='home_section'>
        <h2> Bienvenido a Beti</h2>
        <p> Estás Registrado con el email: </p>
        <p><strong>{currentUser.email}</strong></p>
        <button className='home_button' onClick={handleLogout} >Cerrar Sesión</button>
      </div>

    </div>
  )
}
