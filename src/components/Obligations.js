import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import { showCreateReminder } from '../actions'
import { NavBar } from './NavBar';
import { SidebarObligations } from './SidebarObligations';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CreateReminder } from './CreateReminder';
import '../styles/obligations.css';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';


export const Obligations = () => {

    const dispatch = useDispatch();
    const createReminder = useSelector(state => state.showCreateReminder)
    const reminders = useSelector(state => state.reminders)
    // const [createReminder, setCreateReminder] = useState(false)
    const history = useHistory();

    const [category, setCategory] = useState('Todos')
    const [date, setDate] = useState(new Date())

    const onChange = date => {
        setDate(date)
    }

    const handleChange = (event) => {
        setCategory(event.target.value)
    }

    // const currentCategory = document.getElementsByClassName('react-calendar__viewContainer')
    // if (currentCategory.length) {
    //     if (currentCategory[0]?.childElementCount < 4) {
    //         currentCategory[0].innerHTML += `<span><span class='obligations_green'>&#11044;</span>&#8194;Legal&#8194;&#8194;&#8194;&#8194;</span>`
    //         currentCategory[0].innerHTML += `<span><span class='obligations_blue'>&#11044;</span>&#8194;Pago impuestos&#8194;&#8194;&#8194;&#8194;</span>`
    //         currentCategory[0].innerHTML += `<span><span class='obligations_purple'>&#11044;</span>&#8194;Deudas Finacieras&#8194;&#8194;&#8194;&#8194;</span>`
    //     }
    // }

    console.log(reminders)
    // const locale = 'fr-CA';
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
                        <Calendar
                            onChange={onChange}
                            value={date}
                            onClickDay={(value, event) => alert('Clicked day: ', value)}
                            // formatDay={
                            //     (date) => new Intl.DateTimeFormat(
                            //         locale,
                            //         {
                            //             year: "numeric",
                            //             month: "2-digit",
                            //             day: "2-digit"
                            //         }).format(date)
                            // }
                            locale='es-419'
                            // tileContent={({ activeStartDate, date, view }) => view === 'month' && date.getDay() === 0 ? <p>Domingo alegre!</p> : null}
                        // formatShortWeekday={(locale, date) => formatDate(date, 'dd')}

                        />
                        <span className='obligations_options'>
                            <span><span class='obligations_green'>&#11044;</span>&#8194;Legal&#8194;&#8194;&#8194;&#8194;</span>
                            <span><span class='obligations_blue'>&#11044;</span>&#8194;Pago impuestos&#8194;&#8194;&#8194;&#8194;</span>
                            <span><span class='obligations_purple'>&#11044;</span>&#8194;Deudas Finacieras&#8194;&#8194;&#8194;&#8194;</span>
                        </span>
                        {console.log(date)}
                        {date.toString()}
                    </div>
                    <div className={createReminder ? 'createredimer' : 'createredimer_none'} >
                        <CreateReminder />
                    </div>
                    <div>
                        {
                            history.location.pathname === '/obligations/financialstate' &&
                            <div className='obligations_financialstate'>
                                <section>
                                    <h3>Número de cédula de ciudadanía</h3>
                                    <p>Corfirma tu cédula para que podamos
                                        identificar tus impuestos correspondientes.
                                    </p>
                                    <input type='number' />
                                    <NavLink to='/obligations'>
                                        Confirmar
                                    </NavLink>
                                </section>
                            </div>

                        }
                    </div>
                </section>
            </div>
        </>
    )
}
