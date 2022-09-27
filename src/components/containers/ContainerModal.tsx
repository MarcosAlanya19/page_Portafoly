import { useModal } from "../../hooks/useModal"
import Modal from "../Modal"

const ContainerModal = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <>
      <div>
        <h2>Modales</h2>
        <button onClick={openModal1}>Modal 1</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <h3>Modal1</h3>
          <p>Hola este es el contenido de mi modal1</p>
          <img src="https://placeimg.com/400/400/animals" alt="" />
        </Modal>
      </div>
    </>
  )
}

export default ContainerModal