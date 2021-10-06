import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/createreminder.css';
import { showCreateReminder, addReminder } from '../actions';
import { AiOutlineClose } from 'react-icons/ai';
import  swal  from 'sweetalert';


export const CreateReminder = () => {

    const dispatch = useDispatch()
    const initialState ={
        nameRedimer: '',
        nameTag: '',
        firstRedimer: '',
        comment: '',
        typeRedimer: '',
        color: 'blue',
        dateRedimer: '',
        secondRedimer: '',
        howRemember: '',
    }
    const [state, setState] = useState(initialState)
    const createReminder = useSelector(state => state.showCreateReminder)


    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value, })
    }

    const handleSubmit = event => {
        event.preventDefault()
        if( state.nameRedimer && state.nameTag && state.firstRedimer && state.comment && state.typeRedimer && state.dateRedimer && state.secondRedimer && state.howRemember){
            dispatch(addReminder(state))
            swal({
                title: '¡Genial!',
                text: 'El recordatorio ha sido agregado',
                icon: 'success',
                className:'alertP',
                timer: 2000
            })
            setState(initialState)
            dispatch(showCreateReminder(!createReminder))
        }else{
            swal({
                title: '¡Lo siento!',
                text: 'Faltan más datos',
                icon: 'warning',
                className:'alertP',
                timer: 2000
            })
        }
    }
    return (
        <div className='create_reminder' >
            <div className='create_reminder_title'>
                <h2>Crear Recordatorio</h2>
                <button onClick={() => dispatch(showCreateReminder(!createReminder))}><AiOutlineClose /></button>
            </div>
            <form onSubmit={ e =>handleSubmit(e)} className='create_reminder_form'>
                <section>
                    <div>
                        <label htmlFor='text'>Nombre del recordatorio</label>
                        <input className='create_rem_text' type='text' name='nameRedimer' value={state.nameRedimer} placeholder='Escribe aquí' onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor='text'>Nombre de la etiqueta</label>
                        <input className='create_rem_text' type='text' name='nameTag' value={state.nameTag} placeholder='Escribe aquí' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label htmlFor='text'>Primer recordatorio*</label>
                        <select className='create_rem_text' type='text' name='firstRedimer' value={state.firstRedimer} onChange={handleChange}required >
                            <option selected={true} disabled="disabled" value='' >Selecciona una opción</option>
                            <option value='1'>1...</option>
                            <option value='2'>2..</option>
                            <option value='3'>3...</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='text'>Comentario</label>
                        <input className='create_rem_text' type='text' name='comment' value={state.comment} placeholder='Escribe aquí' onChange={handleChange} required />
                    </div>

                </section>
                <section>
                    <div>
                        <label htmlFor='text'>Tipo de recordatorio</label>
                        <select className='create_rem_text' type='text' name='typeRedimer' value={state.typeRedimer} placeholder='Selecciona una opción' onChange={handleChange} required >
                            <option selected={true} disabled="disabled" value=''>Selecciona una opción</option>
                            <option value='legal'>Legal</option>
                            <option value='payTaxes'>Pago impuestos</option>
                            <option value='financialDebts'>Deudas Finacieras</option>
                        </select>
                    </div>
                    <span className='create_reminder_color_date'>
                        <div>
                            <label htmlFor='text'>Color</label>
                            <select className='create_reminder_select_color' type='text' style={{color: state.color}} name='color' value={state.color} onChange={handleChange} required >
                                <option className='create_reminder_green' value='green' > &#11044;</option>
                                <option className='create_reminder_blue' value='blue' >&#11044;</option>
                                <option className='create_reminder_purple' value='purple'>&#11044;</option>
                            </select>
                            
                        </div>
                        <div>
                            <label htmlFor='text'>Fecha del recordatorio</label>
                            <input className='create_reminder_form_date' type='date' name='dateRedimer' value={state.dateRedimer} onChange={handleChange} placeholder='Seleciona una fecha' required />
                        </div>
                    </span>
                    <div>
                        <label htmlFor='text'>Segundo recordatorio</label>
                        <select className='create_rem_text' type='text' name='secondRedimer' value={state.secondRedimer} onChange={handleChange} required >
                            <option selected={true} disabled="disabled" value=''>Selecciona una opción</option>
                            <option value='1'>1...</option>
                            <option value='2'>2..</option>
                            <option value='3'>3...</option>
                        </select>
                    </div>
                    <div>
                        <span>
                            <label>¿Cómo te recordamos?</label>
                            <div>
                                <input type="radio" name="howRemember" value='whatsapp' onChange={handleChange} required />
                                <span>Whatsapp</span>
                            </div>
                            <div>
                                <input type="radio" name="howRemember" value='email' onChange={handleChange} required />
                                <span>Correo</span>
                            </div>

                            <div>
                                <input type="radio" name="howRemember" value='sms' onChange={handleChange} required />
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

