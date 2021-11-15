import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemList } from '../ItemList/ItemList'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {
                setProducts(resp)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <>
            {
                loading 
                    ? <h2>Cargando...</h2> 
                    : <ItemList items={products} stock="10"/>
            }
        </>
    )
}