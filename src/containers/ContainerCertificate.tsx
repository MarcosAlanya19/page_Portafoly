import CertificatesCard from "../components/CertificatesCard";
import { certificateData } from "../data/certificates.data";

const ContainerCertificate = () => {
  return (
    <>
      <div className="bg-[#eceeef] pb-9 pt-16">
        <div className="container mx-auto">
          <div className="mx-10 lg:mx-0">
            <h1 className="mb-12 text-center text-3xl font-bold uppercase">Certificados</h1>
            <div className="grid justify-items-center md:grid-cols-3 lg:grid-cols-5 gap-5">
              {certificateData.map((c, index)=>(
                <CertificatesCard key={index} data={c}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerCertificate
