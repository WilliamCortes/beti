import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BiShow } from 'react-icons/bi';
import '../styles/login.css'


export const Login = () => {

    const { login } = useAuth();
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const[showPassword, setShowPassword] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            history.push('/');
        } catch (error) {
            alert(error.message)
            console.log('Error login', error.message)
        }
    }

    return (
        <div className='login'>
            <div className='login_logo'>
                <img src='https://i.imgur.com/fzFisPh.png' alt='Logo Beti'/>
                <h1>beti</h1>
            </div>
            <form onSubmit={handleSubmit} className='login_form'>
                <h3> Ingresa a tu plataforma beti </h3>
                <label htmlFor='email'>Correo</label>
                <input type='email' id='email' placeholder='Escribe Aquí' onChange={e => setEmail(e.target.value)} />
                <label htmlFor='password'>Contraseña</label>
                <input className='login_password' type={showPassword?'text':'password'} id='password' placeholder='Escribe Aquí'  onChange={e => setPassword(e.target.value)} />
                <BiShow className='login_icon_eye' onClick={() => setShowPassword(!showPassword)}/>
                <p>Olvidé mi contraseña</p>
                <input className='login_button' type='submit' value='Ingresar' />
                <div className='login_div'>
                    <p>¿No tienes una cuenta?</p>
                    <Link to='/signup'>Regístrate</Link>
                </div>

            </form>
        </div>
    )
}
