import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Boton from './componentes/Boton/Boton'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {

  const fenderStratocaster = {

    nombre: "Fender Stratocaster 1979 AVRI",
    marca: "Fender",
    modelo: "Stratocaster",
    description: "Breve descripción del instrumento",
    categoria: "Guitarra Electrica",
    precio: 2.399,
  }


  return (
    <div>
    <header><NavBar/></header>
    <section>
    <ItemListContainer Guitarra="guitarra electrica"  producto={fenderStratocaster}/>
    </section>
    </div>
  )
}

export default App
