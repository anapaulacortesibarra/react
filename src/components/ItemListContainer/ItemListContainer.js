import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
            .then( (resp) => {

                if (!catId) {
                    setProductos(resp)
                } else {
                    setProductos( resp.filter( prod => prod.category === catId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [catId])

    return (
        <>
            {
                loading 
                ? <Loader/>
                : <ItemList items={productos}/>
            }
        </>
    )
}