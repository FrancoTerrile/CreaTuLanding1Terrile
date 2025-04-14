import { useState } from 'react'
import './App.css'
import Boton from './componentes/Boton/Boton'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {


  return (
    <div>

    <BrowserRouter>
    
      <NavBar/>
    
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
      <Route path='/marca/:idMarca' element={<ItemListContainer/>}/>
      <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>

   {/*  <section>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </section> */}
    </div>
  )
}

export default App
