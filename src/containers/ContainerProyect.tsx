import Proyects from "../components/Proyects"
import { proyectData } from "../data/proyect.data"

const ContainerProyect = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="mb-12 text-center text-3xl font-bold uppercase">Proyectos</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-16 mx-10 lg:mx-0">
          { proyectData.map( (p , index)=>(
            <Proyects key={index} data={p}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContainerProyect
