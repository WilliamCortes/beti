import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/login.css'


export const Login = () => {

    const { login } = useAuth();
    const history = useHistory();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const handleEmail = e => setEmail(e.target.value);
    // const handlePassword = e => setPassword(e.target.value);

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            await login(email, password);
            history.push('/');
        }catch(error){
            console.log('Error login', error.message)
        }
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
            <form onSubmit={handleSubmit} className='register_form'>
                <h3>  Ingresa a tu plataforma beti </h3>

                <label htmlFor='email'>Correo</label>
                <input type='email' id='email' placeholder='Escribe Aquí' onChange={e => setEmail(e.target.value)} />
                <label htmlFor='password'>Contraseña</label>
                <input type='password' id='password' placeholder='Escribe Aquí' onChange={e => setPassword(e.target.value)} />
                <p>Olvidé mi contraseña</p>
                <input className='register_button' type='submit' value='Ingresar' />
                <div className='register_div'>
                    <p>¿No tienes una cuenta?</p>
                    <Link to='/signup'>Regístrate</Link>
                </div>

            </form>
        </div>
    )
}
