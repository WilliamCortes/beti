import React from 'react';
import { NavBar } from './NavBar';
import {Progress} from './Progress';
import '../styles/results.css';

export const Results = () => {
    return (
        <>
            <NavBar />
            <div className='results'>

                <section>
                    <div className='results_logo'>
                        <img src='https://i.imgur.com/MvxmEf1.png' alt='Imagen de Avión' />
                    </div>
                    <div className='results_info'>

                        <h1>Despegando ando</h1>
                        <p>¡Alistandote para despegar! Estás en un momento de aprendizaje
                            continuo, por lo que estás validando tu idea de negocio y atraer o
                            retener tus primeros clientes. Estás buscando la estabilidad
                            financiera y has tenido que invertir esfuerzo y dinero pero no has visto
                            ganacias significativas. No has comenzado a pagar impuestos y
                            sabemos que legalmente tienes muchas deudas.
                        </p>
                        <p>Con el <strong>Paquete Starter</strong> te guiaré en la planificación de tu empresa en
                            el área financiera y tributaria para que logres llevar a tu
                            emprendimineto al siguiente nivel en poco tiempo. ¡Quiero ser parte
                            de tu crecimiento, vamos con toda
                        </p>
                        <button>Continuar</button>
                        <button>Descargar PDF</button>
                    </div>
                </section>
                <section>
                    <p>Rapidez de crecimiento</p>
                    <Progress done='30'/>
                    <p>Aversión al riesgo</p>
                    <Progress done='50'/>
                    <p>Protección Legal</p>
                    <Progress done='30'/>
                    <p>Estabilidad Financiera</p>
                    <Progress done='15'/>
                    <p>Nivel de incertidumbre</p>
                    <Progress done='80'/>
                    <p>Planificación tributaria</p>
                    <Progress done='10'/>
                </section>
            </div>
        </>
    )
}
