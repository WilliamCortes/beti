import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../styles/login.css'


function validate(input) {

    let errors = {};
    console.log(input.nit.length)
    if (!input.name) {
        errors.name = 'Nombre es requeredo';
    } else if (input.name.length > 20) {
        errors.name = 'Nombre es Invalido';
    }
    if (!input.nit) {
        errors.nit = 'El NIT es requerido';
        // } else if (/^[\d\s]{1,60}$/.test(input.weight)) {
    } else if (!(/^[0-9]+$/.test(input.nit)) || input.nit.length !== 9) {
        // } else if (!/!^(?!$)(?:[0-9]|100)$gm/g.test(input.weight)) {
        errors.nit = 'El NIT es invalido';
    }
    if (!input.industry) {
        errors.industry = 'La industria es requerida';
        // } else if (/^-?[0-9]+([.][0-9]+)?$/.test(input.industry)) {
    }
    if (!input.email) {
        errors.email = 'El email es requerido';
        // } else if (/^-?[0-9]+([.][0-9]+)?$/.test(input.email)) {
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        .test(input.email)) {
        errors.email = 'el email es invalido';
    }
    if (!input.password) {
        errors.password = 'El password es requerido';
        // } else if (/^-?[0-9]+([.][0-9]+)?$/.test(input.password)) {
    } else if (input.password.length < 6) {
        errors.password = 'el password es invalido';
    }

    return errors;
};


export const Login = () => {

    const [state, setState] = useState({
        name: '',
        nit: '',
        industry: '',
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({});



    const handleChange = async event => {
        await setState({ ...state, [event.target.name]: event.target.value, })
        setErrors(validate({ ...state, [event.target.name]: event.target.value, }));
        console.log('Error', errors)

    }
    const regiterUser = event => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            console.log(auth, state.email, state.password)
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, state.email, state.password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log('user',user)
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage)
                    // ..
                });

        }else{
            alert('Algunos datos no son válidos')
        }
    }

    return (
        <div className='login'>
            <div className='login_logo'>
                <img src='https://i.imgur.com/fzFisPh.png' />
                <h1>beti</h1>
            </div>
            <form onSubmit={e => regiterUser(e)} className='login_form'>
                <h3>  Registra tu negocio </h3>
                <label htmlFor='text'>Nombre del negocio</label>
                <input className={errors.name && 'danger'} type='text' id='name' name='name' value={state.name} placeholder='Escribe Aquí' onChange={handleChange} />
                {errors.name && (
                    <p className="danger">{errors.name}</p>
                )}
                <label htmlFor='number'>Número de NIT</label>
                <input className={errors.nit && 'danger'} type='text' id='nit' name='nit' value={state.nit} placeholder='Escribe Aquí' onChange={handleChange} />
                {errors.name && (
                    <p className="danger">{errors.nit}</p>
                )}
                <label htmlFor='text'>Industria</label>
                <select className={errors.industry && 'danger'} type='text' id='industry' name='industry' value={state.industry} onChange={handleChange} >
                    <option>Seleciona una opción</option>
                    <option>Industria 1...</option>
                    <option>Industria 2...</option>
                </select>
                <label htmlFor='email'>Correo</label>
                <input className={errors.email && 'danger'} type='email' id='email' name='email' value={state.email} placeholder='Escribe Aquí' onChange={handleChange} />
                {errors.name && (
                    <p className="danger">{errors.email}</p>
                )}
                <label htmlFor='password'>Contraseña</label>
                <input className={errors.password && 'danger'} type='password' id='password' name='password' value={state.password} placeholder='Escribe Aquí' onChange={handleChange} />
                {errors.name && (
                    <p className="danger">{errors.password}</p>
                )}
                <div>
                    <input type="checkbox" name="terms" value="Aceptar" />
                    <p>Acepatar <Link to='/'> téminos y condiciones</Link></p>
                </div>
                <button className='login_button' type='submit'> Registrar mi cuenta</button>
                <p>¿Ya tines una cuenta? <Link to='/register'>Inicia Sesión</Link></p>


            </form>
        </div>
    )
}
