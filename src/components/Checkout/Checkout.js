import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Navigate } from 'react-router'
import { Formik } from 'formik' 
import { generarOrden } from '../firebase/GenerarOrden'
import * as Yup from 'yup' 

import './Checkout.css'



const schema = Yup.object().shape({
    nombre: Yup.string()
        .required('Este campo es obligatorio')
        .min(3, 'Demasiado corto')
        .max(20, 'Demasiado largo'),
    apellido: Yup.string()
        .required('Este campo es obligatorio')
        .min(3, 'Demasiado corto')
        .max(20, 'Demasiado largo'),
    email: Yup.string()
        .required('Este campo es obligatorio')
        .email('Email inválido')
})

export function Checkout() {


    const {cart, totalCart, deleteCart} = useContext(CartContext)

    const initialValues =  {
        nombre: '',
        apellido: '',
        email: ''
    }


    return (


        <>

            {cart.length === 0 
                ? <Navigate to="/"/>
                :
                    <div className="container my-5">
                        <h2>Resumen de compra</h2>
                        <hr/>

                        <Formik 
                            initialValues={initialValues} 
                            validationSchema={schema} 
                            onSubmit={ (values) => { 
                                generarOrden(values, cart, totalCart, deleteCart)
                            }}
                        >
                            {(formik) => ( 
                                <form onSubmit={formik.handleSubmit}>
                                    <input
                                        onChange={formik.handleChange}
                                        name="nombre"
                                        value={formik.values.nombre}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="nombre"
                                    />
                                    {formik.errors.nombre && <small>{formik.errors.nombre}</small>} 


                                    <input
                                        onChange={formik.handleChange}
                                        name="apellido"
                                        value={formik.values.apellido}
                                        className="form-control my-2"
                                        type="text"
                                        placeholder="apellido"
                                    />
                                    {formik.errors.apellido && <small>{formik.errors.apellido}</small>}

                                    <input
                                        onChange={formik.handleChange}
                                        name="email"
                                        value={formik.values.email}
                                        className="form-control my-2"
                                        type="email"
                                        placeholder="email"
                                    />
                                    {formik.errors.email && <small>{formik.errors.email}</small>}

                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                            )}
                        </Formik>


                    </div>


            }
        </>

    )
    
}

