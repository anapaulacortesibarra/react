import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ItemList } from '../ItemList/ItemList'
import { Loader } from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../firebase/config'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { catId } = useParams()

    useEffect(() => {
        
        setLoading(true)

        //1. armar la referencia //

        const productsRef = collection(db, 'products')

        const q = catId ? query(productsRef, where('category','==', catId)) : productsRef

        //2. llamado GET a la referencia //
        getDocs(q)
        .then((collection) => {
            const items = collection.docs.map((doc) => ({
                id: doc.id,
                img: doc.data().img,
                ...doc.data()
            }))
            setProductos(items)
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