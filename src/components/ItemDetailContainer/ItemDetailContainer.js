import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Loader } from '../Loader/Loader'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../firebase/config'
import './ItemDetailContainer.css'



export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(()=>{

        setLoading(true)

        const docRef = doc(db, 'products', itemId)
        getDoc(docRef)
        .then((doc) => {
            setItem({
                id: doc.id,
                ...doc.data()
            })
        })
        .finally(() => {
            setLoading(false)
        })

    }, [itemId])

    return (
        <div className="container my-5">
            {
                loading
                 ? <Loader/>
                 : <ItemDetail {...item}/>
            }


        </div>
    )
}