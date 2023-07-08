
import { useState, useEffect } from "react";
import Error from "./Error"

const Formulario = ({ pacientes, setPacientes }) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  //registra un paciente
  const [error, setError] = useState(false);

  const generarId = () => {
const random = Math.random().toString(36).substr(2);

  }


  const handleSubmit = (e) => {
    e.preventDefault();

    //validación del formulario

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      
      setError(true)
      return;
    }
    setError(false);

    //objeto de paciente

    const objetoPaciente = {

      nombre,
      propietario,
      email,
      fecha,
      sintomas,
      id: generarid

    }
    //console.log(objetoPaciente)

    setPacientes([...pacientes, objetoPaciente]);

    //reiniciar formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')



  }




  return (



    <div className=" md:w-1/2 md:w-1/2 lg:w-2/5  px-5 "  >
      <h2 className="font-black text-3xl text-center "> Seguimiento Pacientes</h2>
      <p className="ext-lg mt-5 text-center mb-10 ">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold ">Administralos</span>

      </p>

      <form action="" className=" bg-white shadow-md  rounded-lg py-10 px-5  mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error>

          <p>Todos los campos son obligatorios</p>
          
        </Error>}


        <div className="mb-5" >
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold"  >
            Nombre Mascota
          </label>
          <input id="mascota" className="border-2 w-full p-2 mt-2  placeholder-gray-400  rounded-md" type="text" placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}



          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold"  >
            Nombre del Propietario
          </label>
          <input id="propietario" className="border-2 w-full p-2 mt-2  placeholder-gray-400  rounded-md" type="text" placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}

          />
        </div>
        <div className="mb-5"  >
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold"  >
            Email
          </label>
          <input id="email" className="border-2 w-full p-2 mt-2  placeholder-gray-400  rounded-md" type="email" placeholder="Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold"  >
            Alta
          </label>
          <input id="alta"
            className="border-2 w-full p-2 mt-2  placeholder-gray-400  rounded-md"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"  >
            Síntomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2  placeholder-gray-400  rounded-md"
            name=""
            id="sintomas" cols="30" rows="10"
            placeholder="Describe Los síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          > </textarea>

        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente " />

      </form>
    </div>
  )
}

export default Formulario;