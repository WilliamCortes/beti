import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BsChevronLeft } from 'react-icons/bs';
import { BiShow } from 'react-icons/bi';
import '../styles/signup.css';


function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Nombre es requeredo';
    } else if (input.name.length > 20) {
        errors.name = 'El nombre puede tener máximo 20 caracteres';
    }
    if (!input.nit) {
        errors.nit = 'El NIT es requerido';
    } else if (!(/^[0-9]+$/.test(input.nit)) || input.nit.length !== 9) {
        errors.nit = 'El NIT es sólo números 9 números sin comas, ni puntos, ni guiones, ni caracteres especiales';
    }
    if (!input.industry) {
        errors.industry = 'La industria es requerida';
    }
    if (!input.email) {
        errors.email = 'El email es requerido';
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        .test(input.email)) {
        errors.email = 'Correo electrónico debe ser válido';
    }
    if (!input.password) {
        errors.password = 'La contraseña  es requerida';
    } else if (input.password.length < 6) {
        errors.password = 'La contraseña debe tener más de 6 caracteres';
    }
    if(!input.terms){
        errors.terms = 'Debes aceptar los términos y condiciones'
    }
    return errors;
};


export const SignUp = () => {

    const { signup } = useAuth();
    const history = useHistory();
    const [state, setState] = useState({
        name: '',
        nit: '',
        industry: '',
        email: '',
        password: '',
        terms:false,
    })
    const [errors, setErrors] = useState({});
    const[showPassword, setShowPassword] = useState(false)
    
    useEffect(()=>{
        setErrors(validate(state));
    },[state])

    const handleChange =  event => {
         setState({ ...state, [event.target.name]: event.target.value, })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            try {
                await signup(state.email, state.password);
                history.push('/');
            } catch (error) {
                console.log(error.message);
                alert(error.message)
            }
        } else {
            alert('Algunos datos no son válidos')
        }
    }
    return (
        <div className='signup'>
            <div className='signup_logo'>
                <img src='https://i.imgur.com/fzFisPh.png' alt='Logo Beti' />
                <h1>beti</h1>
            </div>
            <form onSubmit={handleSubmit} className='signup_form'>
                <h3>  <BsChevronLeft className='icon'/> Registra tu negocio </h3>
                <label htmlFor='text'>Nombre del negocio</label>
                <input className={errors.name && 'danger'} type='text' id='name' name='name' value={state.name} placeholder='Escribe Aquí' onChange={handleChange} />
                {errors.name && (
                    <p className="danger">{errors.name}</p>
                )}
                <label htmlFor='number'>Número de NIT</label>
                <input className={errors.nit && 'danger'} type='text' id='nit' name='nit' value={state.nit} placeholder='Escribe Aquí' onChange={handleChange} />
                {errors.nit && (
                    <p className="danger">{errors.nit}</p>
                )}
                <label htmlFor='text'>Industria</label>
                <select className={errors.industry && 'danger'} type='text' id='industry' name='industry' value={state.industry} onChange={handleChange} >
                    <option>Seleciona una opción</option>
                    <option>Industria 1...</option>
                    <option>Industria 2...</option>
                </select>
                {errors.industry && (
                    <p className="danger">{errors.industry}</p>
                )}
                <label htmlFor='email'>Correo</label>
                <input className={errors.email && 'danger'} type='email' id='email' name='email' value={state.email} placeholder='Escribe Aquí' onChange={handleChange} />
                {errors.email && (
                    <p className="danger">{errors.email}</p>
                )}
                <label className='signup_label_password' htmlFor='password'>Contraseña</label>
                <input className={errors.password && 'danger'}  type={showPassword?'text':'password'}  id='password' name='password' value={state.password} placeholder='Escribe Aquí' onChange={handleChange} />
                <BiShow className='signup_icon_eye' onClick={() => setShowPassword(!showPassword)}/>
                {errors.password && (
                    <p className="danger">{errors.password}</p>
                )}
                <div>
                    <input type="checkbox"  onChange={() =>setState({...state, terms: !state.terms})}  />
                    <p>Aceptar <Link to='/'> téminos y condiciones</Link></p>
                 
                </div>
                {errors.terms && (
                    <p className="danger">{errors.terms}</p>
                )}
                <button className='signup_button' type='submit'> Registrar mi cuenta</button>
                <p>¿Ya tines una cuenta? <Link to='/login'>Inicia Sesión</Link></p>
            </form>
        </div>
    )
}