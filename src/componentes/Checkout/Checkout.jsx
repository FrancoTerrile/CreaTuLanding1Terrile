import React, { useContext } from 'react'
import { useState } from 'react'
import {CarritoContext} from '../../context/CarritoContext'
import {db} from '../../services/config'
import {collection, addDoc, updateDoc, doc, getDoc} from "firebase/firestore"
import './Checkout.css'


const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext)


    const manejadorFormulario =(evento) => {
        evento.preventDefault()
       

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError ("Por favor completar formulario para efectuar compra")
            return
        }

        if(email !== emailConfirmacion){
            setError("Los campos del email no coinciden")
            return
        }

        const orden = {
                items: carrito.map(producto => ({
                    id: producto.item.id,
                    nombre: producto.item.nombre,
                    cantidad: producto.cantidad
                })),
                total: total,
                fecha: new Date(),
                nombre,
                apellido,
                telefono, 
                email
        }

        Promise.all(
            orden.items.map(async (productoOrden)=>{
                const productoRef = doc(db, "productos", productoOrden.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                await updateDoc( productoRef, {
                    stock: stockActual - productoOrden.cantidad
                })
            })
        )
        .then(()=> {

            addDoc(collection(db,"ordenes"), orden)
                .then(docRef => {
                    setOrdenId(docRef.id)
                    vaciarCarrito()
                })
                .catch(error => {
                    console.log("Error al crear la orden de compra", error)
                    setError("Se produjo un error al crear la orden de compra")
                })
        })
        .catch((error)=> {
            console.log("No se pudo actualizar el stock", error)
            setError("No se puede actualizar el stock, intente en el supermecado Vital")
        })





    }

  return (
    <div className='checkout_container'>
        <h2>Checkout</h2>
        <form className='checkout_form' onSubmit={manejadorFormulario}>
            {
                carrito.map(producto=>(
                    <div className='product_checkout' key={producto.item.id}>
                        <img src={producto.item.img} alt={producto.item.nombre}/>
                        <h3>{producto.item.nombre} x {producto.cantidad}</h3>
                        <p>u$s {producto.item.precio}</p>
                    </div>
                ))
            }
            <div className='data_form'>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Telefono</label>
                    <input type="text" onChange={(e)=> setTelefono(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email Confirmacion</label>
                    <input type="email" onChange={(e)=> setEmailConfirmacion(e.target.value)} />
                </div>
            </div>
            {
                error && <p style={{color:"red"}}>{error}</p>
            }
            <button type='submit'>Confirmar Compra</button>
            {
                ordenId && (<strong>Gracias por tu compra! tu numero de orden es: {ordenId}</strong>)
            }
        </form>

    </div>
  )
}

export default Checkout