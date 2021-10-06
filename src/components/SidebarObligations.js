import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import '../styles/sidebarobligations.css'



export const SidebarObligations = () => {
    const history = useHistory();

    return (
        <div className='side-obligations'>
            <figure>
                <img src='https://i.imgur.com/2NENqMc.png' alt=' Imagen de una abeja entrando a la colmena'/>
            </figure>
            <h3>Miel de la Sierra</h3>
            <NavLink to='/obligations' className={history.location.pathname === '/obligations' ? 'active' : 'disabled'}>
                <img className='sidebar_icon' src='https://i.imgur.com/o4jL6Zi.png' alt=' Calendario'/>
                Calendario
            </NavLink>
            <NavLink to='/obligations/financialstate' className={history.location.pathname === '/obligations/financialstate' ? 'active' : 'disabled'}> 
                <img className='sidebar_icon' src='https://i.imgur.com/mFqmtFI.png' alt='linea quebrada'/>
                Tu estado financiero
            </NavLink>
            <NavLink to='/' className={history.location.pathname === '/' ? 'active' : 'disabled'} >
                <img  className='sidebar_icon' src='https://i.imgur.com/woRcqDA.png' alt='contrato firmado'/>
                Contratos
            </NavLink>
            <NavLink to='/' className={history.location.pathname === '/' ? 'active' : 'disabled'}>
                <img className='sidebar_icon' src='https://i.imgur.com/OcYIHmM.png' alt='billetes'/>
                Beneficios tributarios
            </NavLink>
            <NavLink to='/' className={history.location.pathname === '/' ? 'active' : 'disabled'}>
                <img className='sidebar_icon' src='https://i.imgur.com/ZRYMFLV.png' alt='aprovado'/>
                Constitución
            </NavLink>
            <NavLink to='/' className={history.location.pathname === '/' ? 'active' : 'disabled'}>
                <img className='sidebar_icon' src='https://i.imgur.com/USxz716.png' alt='equipo'/>
                Equipo de trabajo
            </NavLink>
            <NavLink to='/' className={history.location.pathname === '/' ? 'active' : 'disabled'}>
                <img className='sidebar_icon' src='https://i.imgur.com/Kxn0SJQ.png' alt='perfil'/>
                Perfil
            </NavLink>
        </div>
    )
}
