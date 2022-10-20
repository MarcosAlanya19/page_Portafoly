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
                <div className="flex items-center justify-around">
                  <h5 className="mt-1 text-2xl font-bold tracking-tight text-white  text-center">{title}</h5>
                  
                </div>
                <div className="grid grid-cols-3 uppercase text-white my-3 items-center">
                  <a href={linkGH} target="_blank" className="grid justify-items-center text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><title>Visitar GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" clipRule="evenodd"/></svg>
                      <span className="sr-only">GitHub account</span>
                  </a>
                  <div className="flex justify-center font-bold text-3xl text-gray-400">
                    -
                  </div>
                  <a href={linkPage} target="_blank" className="grid justify-items-center text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Visitar Pagina</title><path d="M16.965 1.18C15.085.164 13.769 0 10.683 0H3.73v14.55h6.926c2.743 0 4.8-.164 6.61-1.37 1.975-1.303 3.004-3.484 3.004-6.007 0-2.716-1.262-4.896-3.305-5.994zm-5.5 10.326h-4.21V3.113l3.977-.027c3.62-.028 5.43 1.234 5.43 4.128 0 3.113-2.248 4.292-5.197 4.292zM3.73 17.61h3.525V24H3.73Z"/></svg>                    
                      <span className="sr-only">Dribbble account</span>
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
