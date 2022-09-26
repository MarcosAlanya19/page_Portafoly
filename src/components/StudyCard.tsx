import { Study } from "../domain/study.interfaces"
import '../assets/style.css'

interface MyProps {
  data: Study
}
export const StudyCard = ({ data: { title, img , course, state, year, certificate} }: MyProps) => {
  return (
    <>
      <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl border-gray-700 bg-gray-800">
        <img className="bg-white md:h-full w-full object-cover md:object-contain rounded-t-lg md:w-40 md:rounded-none md:rounded-l-lg" src={img} alt=""/>
        
        <div className="flex flex-col justify-between p-4 leading-normal text-center bg-gray-800 w-full lg:w-72 md:text-start">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{title}</h5>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p>{course}</p>
            <p>{state}</p>
            <p>{year}</p>
            {certificate &&
            <div className="modal_container">
            <div className="mt-5">
              <a href="#modal" className="text-white bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">CONSTANCIA</a>
            </div>
              <section id="modal" className="modal">
                <div className="modal__container">
                  <div className="modal__close--container">
                    <a href="#inicio" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-500 rounded-lg text-2xl font-bold px-5 py-2.5 text-center mr-2 mb-2 ">X</a>
                  </div>
                  <figure className="modal__picture">
                    <img src={certificate} className="modal__img"/>
                  </figure>
                </div>
              </section>
            </div>
            }
            
          </div>
        </div>
      </div>
    </>
  )
}
