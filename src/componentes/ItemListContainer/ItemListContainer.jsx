import React from 'react'
import "./ItemListContainer.css"

const ItemListContainer = ({Guitarra, producto}) => {

  console.log(producto);
  

  return (
    <div>
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">{producto.marca}</h6>
            <p className="card-text">{producto.description}</p>
            <a href="#" className="card-link">U$D {producto.precio}</a>
            <a href="#" className="card-link">{producto.categoria}</a>
          </div>
        </div>
      </div> 
    </div>
  )
  
}

export default ItemListContainer