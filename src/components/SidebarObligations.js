import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/sidebarobligations.css'



export const SidebarObligations = () => {
    return (
        <div className='side-obligations'>
            <figure>
                <img src='https://i.imgur.com/2NENqMc.png' alt=' Imagen de una abeja entrando a la colmena'/>
            </figure>
            <h3>Miel de la Sierra</h3>
            <NavLink to='/obligations'>
               
                <img className='sidebar_icon' src='https://i.imgur.com/o4jL6Zi.png' alt=' Imagen de una abeja entrando a la colmena'/>
                Calendario
            </NavLink>
            <NavLink to='/obligations'> 
                <img className='sidebar_icon' src='https://i.imgur.com/mFqmtFI.png' alt=' Imagen de una abeja entrando a la colmena'/>
                Tu estado financiero
            </NavLink>
            <NavLink to='/obligations'>
                
                <img  className='sidebar_icon' src='https://i.imgur.com/woRcqDA.png' alt=' Imagen de una abeja entrando a la colmena'/>
                Contratos
            </NavLink>
            <NavLink to='/obligations'>
                
                <img className='sidebar_icon' src='https://i.imgur.com/OcYIHmM.png' alt=' Imagen de una abeja entrando a la colmena'/>
                Beneficios tributarios
            </NavLink>
            <NavLink to='/obligations'>
                
                <img className='sidebar_icon' src='https://i.imgur.com/ZRYMFLV.png' alt=' Imagen de una abeja entrando a la colmena'/>
                Constitución
            </NavLink>
            <NavLink to='/obligations'>
                <img className='sidebar_icon' src='https://i.imgur.com/USxz716.png' alt=' Imagen de una abeja entrando a la colmena'/>
                Equipo de trabajo
            </NavLink>
            <NavLink to='/obligations'>
                <img className='sidebar_icon' src='https://i.imgur.com/Kxn0SJQ.png' alt=' Imagen de una abeja entrando a la colmena'/>
                Perfil
            </NavLink>
        </div>
    )
}
