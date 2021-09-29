import React, { useState }  from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { NavBar } from './NavBar';
import  swal  from 'sweetalert';
import '../styles/betitest.css'


export const BetiTest = () => {

    const [modal, setModal] = useState(true)
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault()
        swal({
            title: '¡Genial, hemos terminado!',
            text: 'A continuación puedes ver el diagnóstico que tenemos para ti y podamos seguir hablando según tus necesidades específicas',
            icon: 'success',
            className:'alertP',
            button: 'Ver resultados'
        }).then(() => {
            history.push('/results');
          });
    }

    return (
        <>
            <NavBar />
            <div className='betitest'>
                <div className='betitest_link'>
                    <NavLink to='home'>Volver</NavLink>
                </div>
                <div className='betitest_logo'>
                    <img src='https://i.imgur.com/fzFisPh.png' alt='Logo Beti' />
                    <div>
                        <h2>Beti test</h2>
                        <p>Completa las siguientes preguntas</p>
                    </div>
                </div>
                <form onSubmit={event => handleSubmit(event)} >
                    <div className='betitest_form_container'>
                        <section className='betitest_section'>
                            <label><strong>¿Qué vendes?</strong></label>
                            <input type='text' className='betitest_input_text' placeholder='Escribe aquí' />
                            <label><strong>¿Actualmente estás constituido?</strong></label>
                            <div>
                                <input type="radio" name="constituted" value='Si' checked />
                                <label>Si</label>
                                <input type="radio" name="constituted" value='No' />
                                <label>No</label>
                            </div>
                            <label><strong>¿Sabes cada cuánto estás rotando tu inventario?</strong></label>
                            <div>
                                <input type="radio" name="inventory" value='Si' checked />
                                <label>Si</label>
                                <input type="radio" name="inventory" value='No' />
                                <label>No</label>
                            </div>
                        </section>
                        <section className='betitest_section'>
                            <label><strong>¿En promedio cuántos días a la semana estás vendiendo?</strong></label>
                            <select type='text' className='betitest_select' name='sales'   >
                                <option>Seleciona una opción</option>
                                <option>Industria 1...</option>
                                <option>Industria 2...</option>
                            </select>
                            <label><strong>¿Tienes un acuerdo escrito con tus trabajadores, socios o proveedores?</strong></label>
                            <div>
                                <input type="radio" name="agreement" value='Si' checked />
                                <label>Si</label>
                                <input type="radio" name="agreement" value='No' />
                                <label>No</label>
                            </div>
                            <label><strong>¿Si te piden que pagues el dinero prestado sabes si puedes pagarlo en menos de 1 año?</strong></label>
                            <div>
                                <input type="radio" name="topay" value='Si' checked />
                                <label>Si</label>
                                <input type="radio" name="topay" value='No' />
                                <label>No</label>
                            </div>
                        </section>
                        <section className='betitest_section'>
                            <label><strong>¿Cuanto tiempo lleva tu negocio operando?</strong></label>
                            <input type='text' className='betitest_input_text' placeholder='Selecciona una opción' />
                            <label><strong>¿Conoces tus deducciones o descuentos de impuesto a la Renta?</strong></label>
                            <div>
                                <input type="radio" name="tax" value='Si' checked />
                                <label>Si</label>
                                <input type="radio" name="tax" value='No' />
                                <label>No</label>
                            </div>
                            <label><strong>¿Conoces la variación financiera de tu negocio?</strong></label>
                            <div>
                                <input type="radio" name="variation" value='Si' checked />
                                <label>Si</label>
                                <input type="radio" name="variation" value='No' />
                                <label>No</label>
                            </div>
                        </section>
                    </div>
                    <div className='betitest_button'>
                        <button tipe='submit' >Terminar y enviar</button>
                    </div>
                </form>
                <section className={modal?'betitest_modal':'betitest_none'}>
                    <div >
                        <img className='betitest_img_modal' src='https://i.imgur.com/OGB8fB1.png' alt='Imagen de Empresario' />
                        <img src='https://i.imgur.com/fzFisPh.png' alt='Logo Beti' />
                    </div>
                    <div className='betitest_modal_info'>
                        <h2>Queremos ayudarte a cumplir tus sueños y llevar a tu negocio al siguiente nivel.</h2>
                        <p>Completa las siguientes preguntas</p>
                        <button onClick={() => setModal(!modal)}>Completar ahora</button>
                    </div>
                </section>
            </div>
        </>
    )
}

