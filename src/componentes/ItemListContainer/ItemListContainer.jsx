import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import {db} from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import Loader from '../Loader/Loader'

const ItemListContainer = ({Guitarra, producto}) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)


    const {idCategoria, idMarca} = useParams()

    useEffect(()=>{
      setLoading(true)
      const misProductos = idCategoria ? query(collection(db,"productos"),where("idCat", "==", idCategoria)) : collection(db, "productos");
      
      getDocs(misProductos)
      .then(res=> {
        const nuevosProductos = res.docs.map(doc =>{
          const data = doc.data()
          return {id:doc.id,...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.error(error))
      .finally(()=>{
        setLoading(false)
      })
    },[idCategoria])

    useEffect(()=>{
      setLoading(true)
      const misProductos = idMarca ? query(collection(db,"productos"),where("marca", "==", idMarca)) : collection(db, "productos");
      
      getDocs(misProductos)
      .then(res=> {
        const nuevosProductos = res.docs.map(doc =>{
          const data = doc.data()
          return {id:doc.id,...data}
        })
        setProductos(nuevosProductos)
      })
      .catch(error => console.error(error))
      .finally(()=>{
        setLoading(false)
      })
    },[idMarca]) 

  return (
    <div className='productosContainer'>
      {loading ? <Loader/> : <ItemList productos={productos}/>}
    </div>
  )
  
}

export default ItemListContainer