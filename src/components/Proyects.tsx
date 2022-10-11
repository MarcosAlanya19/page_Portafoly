import { Proyect } from "../domain/proyect.interfaces"
import '../assets/style.css'

interface MyProps {
  data: Proyect
}

const Proyects = ({data: {img, linkPage, title, linkGH, description, lenguage, proyect, type}}:MyProps) => {
  return (
    <>
        <div>
          <div className="shadow-[0_0_12px_2px_rgba(0,0,0,0.75)] max-w-sm  rounded-lg border bg-gray-800 border-gray-700">
            <a href={linkPage} className="img__effect" target="_blank">
              <picture className="alt">
                  <img loading="lazy" className="rounded-t-lg" src={img} alt="img__page" />
              </picture>
            </a>
          
              <div className="px-5 pb-5 items-center">
                <h5 className="mt-1 mb-3 text-2xl font-bold tracking-tight text-white  text-center">{title}</h5>
                <div className="grid grid-cols-2 uppercase text-white justify-items-center my-4">
                  <a className="text-white font-medium rounded-md text-sm px-2.5 py-2  bg-sky-600 hover:bg-sky-700" href={linkPage} target="_blank">
                    <p>Visitar page</p>
                  </a>
                  <a className="text-white font-medium rounded-md text-sm px-2.5 py-2  bg-sky-600 hover:bg-sky-700" href={linkGH} target="_blank">
                    <p>Revisar Codigo</p>
                  </a>
                </div>
                <div className="font-normal text-gray-400 text-justify">
                  <p>{description}</p>
                  <p>Proyecto: {proyect}</p>
                  <p>Tipo de proyecto: {type}</p>
                </div>
                <div className="font-normal text-gray-400 mt-4">
                  <p className="text-center">{lenguage}</p>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Proyects
