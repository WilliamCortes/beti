import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { NavBar } from './NavBar';
import { SidebarObligations } from './SidebarObligations';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import '../styles/obligations.css';
import { CreateReminder } from './CreateReminder';


export const Obligations = () => {

    const [category, setCategory] = useState('Todos')
    const [date, setDate] = useState(new Date())
    const [createReminder, setCreateReminder] = useState(false)

    const onChange = date => {
        setDate(date)
    }
    const handleChange = () => {
        // setCategory(event.target.value)
    }
    console.log(createReminder)
    return (
        <>
            <NavBar />
            <div className='obligations'>
                <SidebarObligations />
                <section className='obligations_calendar'>
                    <h2>Calendario de obligaciones</h2>
                    <div className='obligations_buttons'>
                        <button className='obligations_button' onClick={() => setCreateReminder(!createReminder)}>
                            <AiOutlinePlusCircle className='obligation_button_icon' />
                            Crear Recordatorio
                        </button>
                        <select className='' type='text' id='category' name='category' value={category} onChange={handleChange} >
                            <option>Todos</option>
                            <option>Legal</option>
                            <option>Pago impuestos</option>
                            <option>Deudas Finacieras</option>
                        </select>
                    </div>
                    <div>
                        <Calendar onChange={onChange} value={date} />
                    </div>
                    <div className={createReminder ? 'createredimer' : 'createredimer_none'} >
                        <CreateReminder />
                    </div>
                </section>
            </div>
        </>
    )
}
