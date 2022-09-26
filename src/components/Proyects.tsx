import { Proyect } from "../domain/proyect.interfaces"

interface MyProps {
  data: Proyect
}

const Proyects = ({data: {img, linkPage, title, linkGH, description, lenguage, proyect, type}}:MyProps) => {
  return (
    <>
        <div>
          <div className="shadow-[0_0_12px_2px_rgba(0,0,0,0.75)] max-w-sm bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <a href={linkPage} className="img__effect" target="_blank">
              <picture className="alt">
                  <img className="rounded-t-lg" src={img} alt="img__page" />
              </picture>
            </a>
          
              <div className="p-5 h-60 grid grid-rows-3 items-center">
                <a href={linkGH} target="_blank">
                  <h5 className="mb-9 text-2xl font-bold tracking-tight text-white hover:text-blue-400 hover:scale-110 transition-all duration-300 text-center">{title}</h5>
                </a>
                <div className="font-normal text-gray-700 dark:text-gray-400">
                  <p className="">{description}</p>
                  <p>Proyecto: {proyect}</p>
                  <p>Tipo de proyecto: {type}</p>
                </div>
                <div className="font-normal text-gray-700 dark:text-gray-400 pt-5">
                  <p className="text-center mt-5">{lenguage}</p>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Proyects
