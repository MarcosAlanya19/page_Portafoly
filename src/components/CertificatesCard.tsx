import { Certificate } from "../domain/certificate.interface"
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

interface MyProps{
  data: Certificate
}

const CertificatesCard = ({data:{company, date, img, title}}:MyProps) => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  return (
    <>
      <div className="max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700">
        <img className="rounded-t-lg" src={img} alt="img_certificate" />
        <div className="grid grid-rows-2 items-center lg:my-2">
            <button className="py-1 text-1xl font-bold tracking-tight text-white text-center " onClick={openModal1}>{title}</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
              <img src={img} alt="img__certificate" />
            </Modal>
          {/* <a href="#">
            <h5 className="py-1 text-1xl font-bold tracking-tight text-white text-center ">{title}</h5>
          </a> */}
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
