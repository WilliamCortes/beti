import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/createreminder.css';
import { showCreateReminder } from '../actions';
import { AiOutlineClose } from 'react-icons/ai';


export const CreateReminder = () => {

    const dispatch = useDispatch()
    const [state, setState] = useState({
        nameRedimer: '',
        nameTag: '',
        firstRedimer: '',
        comment: '',
        typeRedimer: '',
        color: 'blue',
        dateRedimer: '',
        secondRedimer: '',
        howRemember: '',
    })
    const createReminder = useSelector(state => state.showCreateReminder)


    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value, })
    }

    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <div className='create_reminder' >
            <div className='create_reminder_title'>
                <h2>Crear Recordatorio</h2>
                <button onClick={() => dispatch(showCreateReminder(!createReminder))}><AiOutlineClose /></button>
            </div>
            <form onSubmit={handleSubmit} className='create_reminder_form'>
                <section>
                    <div>
                        <label htmlFor='text'>Nombre del recordatorio</label>
                        <input className='create_rem_text' type='text' name='nameRedimer' value={state.nameRedimer} placeholder='Escribe aquí' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='text'>Nombre de la etiqueta</label>
                        <input className='create_rem_text' type='text' name='nameTag' value={state.nameTag} placeholder='Escribe aquí' onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor='text'>Primer recordatorio*</label>
                        <select className='create_rem_text' type='text' name='firstRedimer' value={state.firstRedimer} onChange={handleChange} >
                            <option>Selecciona una opción</option>
                            <option>1...</option>
                            <option>2..</option>
                            <option>3...</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='text'>Comentario</label>
                        <input className='create_rem_text' type='text' name='comment' value={state.comment} placeholder='Escribe aquí' onChange={handleChange} />
                    </div>

                </section>
                <section>
                    <div>
                        <label htmlFor='text'>Tipo de recordatorio</label>
                        <select className='create_rem_text' type='text' name='typeRedimer' value={state.typeRedimer} placeholder='Selecciona una opción' onChange={handleChange} >
                            <option>Selecciona una opción</option>
                            <option>Legal</option>
                            <option>Pago impuestos</option>
                            <option>Deudas Finacieras</option>
                        </select>
                    </div>
                    <span className='create_reminder_color_date'>
                        <div>
                            <label htmlFor='text'>Color</label>
                            <select className='create_reminder_select_color' type='text' style={{color: state.color}} name='color' value={state.color} onChange={handleChange} >
                                <option className='create_reminder_green' value='green' > &#11044;</option>
                                <option className='create_reminder_blue' value='blue' >&#11044;</option>
                                <option className='create_reminder_purple' value='purple'>&#11044;</option>
                            </select>
                            
                        </div>
                        <div>
                            <label htmlFor='text'>Fecha del recordatorio</label>
                            <input className='create_reminder_form_date' type='date' name='dateRedimer' value={state.dateRedimer} onChange={handleChange} placeholder='Seleciona una fecha' />
                        </div>
                    </span>
                    <div>
                        <label htmlFor='text'>Segundo recordatorio</label>
                        <select className='create_rem_text' type='text' name='secondRedimer' value={state.secondRedimer} onChange={handleChange} >
                            <option>Selecciona una opción</option>
                            <option>1...</option>
                            <option>2..</option>
                            <option>3...</option>
                        </select>
                    </div>
                    <div>
                        <span>
                            <label>¿Cómo te recordamos?</label>
                            <div>
                                <input type="radio" name="howRemember" value='whatsapp' onChange={handleChange} />
                                <span>Whatsapp</span>
                            </div>
                            <div>
                                <input type="radio" name="howRemember" value='email' onChange={handleChange} />
                                <span>Correo</span>
                            </div>

                            <div>
                                <input type="radio" name="howRemember" value='sms' onChange={handleChange} />
                                <span>SMS</span>
                            </div>
                        </span>
                    </div>
                </section>
                <span>
                    <button type='submit'>Agregar</button>
                </span>
            </form>
        </div >
    )
}

