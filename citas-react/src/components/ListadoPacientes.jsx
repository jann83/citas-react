import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  console.log(pacientes);



  return (
    <div className="md:w-1/2 lg:w-3/5  md:h-screen overflow-y-scroll">

      <h2 className="font-black text-3xl text-center">  Listado Pacientes
      </h2>
      <p className="mt-5 mb-10  text-center">Administra tus {''} <span className="text-indigo-600 font-bold text-center">Pacientes y Citas</span></p>

      {pacientes.map((paciente) => (

        <Paciente

          key={Date.now  }

          paciente={paciente}


        />
      )
      )}






    </div>


  )
}

export default ListadoPacientes;