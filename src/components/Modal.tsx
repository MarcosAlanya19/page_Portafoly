import { ReactNode } from 'react'
import '../assets/modal.css'

interface MyProps{
  children: ReactNode
  isOpen: boolean | (() => void)
  closeModal: boolean | (() => void)
}

const Modal = ({children, isOpen, closeModal}:MyProps) => {
  const handleModalContainerClick = (e: { stopPropagation: () => void }) => e.stopPropagation();

  return (
    <>
      <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button className="modal-close hover:text-white border font-bold rounded-lg text-sm px-2.5 py-1 text-center m-1 border-gray-600 text-gray-200 bg-gray-700 hover:bg-gray-600" onClick={closeModal}>X</button>
          {children}
        </div>
      </article>
    </>
  )
}

export default Modal