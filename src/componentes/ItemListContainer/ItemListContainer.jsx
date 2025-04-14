import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import { getProductos, getProductosPorCategoria, getProductosPorMarca } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({Guitarra, producto}) => {
    const [productos, setProductos] = useState([])


    const {idCategoria, idMarca} = useParams()

    useEffect(()=>{
      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
      funcionProductos(idCategoria)
        .then(res => setProductos(res))
    },[idCategoria])  

    useEffect(()=>{
      const funcionProductos = idMarca ? getProductosPorMarca : getProductos;
      funcionProductos(idMarca)
        .then(res => setProductos(res))
    },[idMarca]) 

  return (
    <div className='productosContainer'>
      <ItemList productos={productos}/>
    </div>
  )
  
}

export default ItemListContainer