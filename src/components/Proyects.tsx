import { Proyect } from "../domain/proyect.interfaces"

interface MyProps {
  data: Proyect
}

const Proyects = ({data: {img, linkPage, title, linkGH, description, lenguage, proyect, type}}:MyProps) => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        {(linkPage != '#')
        ? 
        <a href={linkPage} target="_blank">
          <img className="rounded-t-lg" src={img} alt="" />
        </a> 
        : 
        <a href={linkPage} >
          <img className="rounded-t-lg" src={img} alt="" />
        </a>}
        
        <div className="p-5">
          <a href={linkGH} target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-sky-300 hover:text-sky-500 text-center">{title}</h5>
          </a>
          <div className="font-normal text-gray-700 dark:text-gray-400 flex flex-col">
            <p className="">{description}</p>
            <p>Proyecto: {proyect}</p>
            <p>Tipo de proyecto: {type}</p>
            <p className="text-center mt-5">{lenguage}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Proyects
