import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { auth } from '../firebaseconf';
import '../styles/register.css'


export const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const regiterUser = e => {
        
        e.preventDeafault();
        // auth.createUserWithEmailAndPassword(email, password)
        //     .then(res => alert('Empresa registrada con éxito'))
        //     .catch( e => console.log(e))
    }

    return (
        <div className='register'>
            <div className='register_logo'>
                <img src='https://i.imgur.com/fzFisPh.png' />
                <h1>beti</h1>
            </div>
            <form onSubmit={regiterUser} className='register_form'>
                <h3>  Ingresa a tu plataforma beti </h3>

                <label htmlFor='email'>Correo</label>
                <input type='email' id='email' placeholder='Escribe Aquí' onChange={e => setEmail(e.target.value)} />
                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' placeholder='Escribe Aquí' onChange={e => setPassword(e.target.value)} />
                <p>Olvidé mi contraseña</p>
                <input className='register_button' type='submit' value='Ingresar' />
                <div className='register_div'>
                    <p>¿No tienes una cuenta?</p>
                    <Link to='/login'>Regístrate</Link>
                </div>

            </form>
        </div>
    )
}
