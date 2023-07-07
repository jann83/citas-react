import { useState } from 'react'
import Header from './components/header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';




function App() {






  return (

    <div className='container mx-auto mt-20 '>

      <Header />
      <div className='mt-12   md:flex    ' >

        <Formulario />
        <ListadoPacientes />
       

      </div>


    </div>



  )
}

export default App