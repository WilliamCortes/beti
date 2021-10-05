import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Calendar from 'react-calendar';
import { showCreateReminder } from '../actions'
import { NavBar } from './NavBar';
import { SidebarObligations } from './SidebarObligations';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import  { CreateReminder }  from './CreateReminder';
import '../styles/obligations.css';


export const Obligations = () => {

    const dispatch = useDispatch();
    const createReminder = useSelector( state =>state.showCreateReminder)
    // const [createReminder, setCreateReminder] = useState(false)


    const [category, setCategory] = useState('Todos')
    const [date, setDate] = useState(new Date())



    const onChange = date => {
        setDate(date)
    }

    const handleChange = () => {
        // setCategory(event.target.value)
    }
    
    return (
        <>
            <NavBar />
            <div className='obligations'>
                <SidebarObligations />
                <section className='obligations_calendar'>
                    <h2>Calendario de obligaciones</h2>
                    <div className='obligations_buttons'>
                        <button className='obligations_button' onClick={() => dispatch(showCreateReminder(!createReminder))}>
                            <AiOutlinePlusCircle className='obligation_button_icon' />
                            Crear Recordatorio
                        </button>
                        <select className='obligations_select' type='text' id='category' name='category' value={category} onChange={handleChange} >
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
