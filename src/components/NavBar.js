import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BsBell } from 'react-icons/bs';
import '../styles/navbar.css';



export const NavBar = () => {
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

        <header className='header'>
            <div className='nav_container'>
                <figure className='nav_logo'>
                    <img src='https://i.imgur.com/fzFisPh.png' alt='Logo Beti' />
                </figure>
                <nav className='nav_menu'>
                    <ol>
                        <li>
                            <BsBell className='nav_icon' />
                        </li>

                        <li>
                            <button className='nav_button' onClick={handleLogout} >Cerrar Sesión</button>
                        </li>
                    </ol>
                </nav>
            </div>
        </header>
    )
}
