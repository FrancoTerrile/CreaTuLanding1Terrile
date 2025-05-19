import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import {db} from '../../services/config'
import { getDoc, doc } from 'firebase/firestore'
import Loader from '../Loader/Loader'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const {idItem} = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
      setLoading(true)
      const nuevoDoc = doc(db, "productos", idItem)

      getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const nuevoProducto = {id: res.id, ...data}
        setProducto(nuevoProducto)
      })
      .catch(error => console.error(error))
      .finally(()=>{
        setLoading(false)
      })
    },[idItem])

  return (
    <>
    {loading ? <Loader/> : <ItemDetail {...producto}/>}
    </>
  )
}

export default ItemDetailContainer