import { Certificate } from "../domain/certificate.interface"

interface MyProps{
  data: Certificate
}

const CertificatesCard = ({data:{company, date, img, title}}:MyProps) => {
  return (
    <>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt="img_certificate" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
          </a>
          <div className="font-normal text-gray-700 dark:text-gray-400 grid grid-cols-2 text-center">
            <p>{company }</p>
            <p>{date }</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CertificatesCard
