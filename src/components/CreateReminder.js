import React, { useState } from 'react'

export const CreateReminder = () => {

    const [state, setState] = useState({ typeRedimer: '', firstRedimer: '', secondRedimer: '', })

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value, })
    }

    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <div>
            <h2>Crear Recordatorio</h2>
            <form onSubmit={handleSubmit} className='create_reminder_form'>
                <section>
                    <label htmlFor='text'>Nombre del recordatorio</label>
                    <input className='' type='text' placeholder='Escribe aquí' />
                    <label htmlFor='text'>Nombre de la etiqueta</label>
                    <input className='' type='text' placeholder='Escribe aquí' />
                    <label htmlFor='text'>Primer recordatorio*</label>
                    <input type='date' name='firstRedimer' value={state.firstRedimer} placeholder='Selecciona una opción' onChange={handleChange} />
                    <label htmlFor='text'>Comentario</label>
                    <input className='' type='text' placeholder='Escribe aquí' />
                </section>
                <section>
                    <label htmlFor='text'>Tipo de recordatorio</label>
                    <select type='text' name='typeRedimer' value={state.typeRedimer} placeholder='Selecciona una opción' onChange={handleChange} >
                        <option>Legal</option>
                        <option>Pago impuestos</option>
                        <option>Deudas Finacieras</option>
                    </select>
                    <label htmlFor='text'>Nombre de la etiqueta</label>
                    <input className='' type='text' placeholder='Escribe aquí' />
                    <label htmlFor='text'>Primer recordatorio*</label>
                    <input className='' type='text' placeholder='Selecciona una opci[on' />
                    <label htmlFor='text'>Comentario</label>
                    <input className='' type='text' placeholder='Escribe aquí' />
                </section>
            </form>
        </div>
    )
}
