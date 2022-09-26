import { StudyCard } from "../components/StudyCard";
import { studyData } from "../data/study.data"

const ContainerStudy = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#eceeef" fillOpacity="1" d="M0,192L30,208C60,224,120,256,180,240C240,224,300,160,360,128C420,96,480,96,540,122.7C600,149,660,203,720,202.7C780,203,840,149,900,154.7C960,160,1020,224,1080,250.7C1140,277,1200,267,1260,256C1320,245,1380,235,1410,229.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
      </svg>
      <div className="bg-[#eceeef] pb-9">
        <div className="container mx-auto">
          <div className="mx-10 lg:mx-0">
            <h1 className="mb-12 text-center text-3xl font-bold uppercase">Estudios</h1>
            <div className="grid justify-items-center md:grid-cols-2 gap-5">
              {studyData.map((s, index) => (
                <StudyCard key={index} data={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerStudy
