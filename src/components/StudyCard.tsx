import { Study } from "../domain/study.interfaces"
import '../assets/modal.css'
import Modal from "./Modal"
import { useModal } from "../hooks/useModal"

interface MyProps {
  data: Study
}
export const StudyCard = ({ data: { title, img , course, state, year, certificate} }: MyProps) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <>
      <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl border-gray-700 bg-gray-800">
        <img className="bg-white md:h-full w-full object-cover md:object-contain rounded-t-lg md:w-40 md:rounded-none md:rounded-l-lg" src={img} alt=""/>
        
        <div className="flex flex-col justify-between p-4 leading-normal text-center bg-gray-800 w-full lg:w-72 md:text-start">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <div className="mb-3 font-normal text-gray-400">
            <p>Carrera: {course}</p>
            <p>Estado: {state}</p>
            <p>{year}</p>
            {certificate &&
            <div>
              <button className="text-white font-medium rounded-md text-sm px-2.5 py-2 mt-3 bg-blue-600 hover:bg-blue-700" onClick={openModal1}>CONSTANCIA</button>
              <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <img src={certificate} alt="img__certificate" />
              </Modal>
            </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
