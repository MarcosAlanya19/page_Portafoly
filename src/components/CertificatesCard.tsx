import { Certificate } from "../domain/certificate.interface"
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

interface MyProps{
  data: Certificate
}

const CertificatesCard = ({data:{company, date, img, title}}:MyProps) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <>
      <div className="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
        <img className="rounded-t-lg" src={img} alt="img_certificate" />
        <div className="grid grid-rows-2 items-center lg:my-2">
            <button  className="py-1 text-1xl font-bold tracking-tight text-white text-center " onClick={openModal}>{title}</button>
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
              <img loading="lazy" src={img} alt="img__certificate" />
            </Modal>
          <div className="font-normal text-gray-400 grid grid-cols-2 text-center py-1 px-1 items-center">
            <p>{company }</p>
            <p>{date }</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificatesCard
