import { Fragment, useEffect, useState } from "react"
import { StudyCard } from "../components/StudyCard";
import { studyData } from "../data/study.data"
import { Study } from "../domain/study.interfaces";

const _ContainerStudy = () => {
  const [studyList, setStudyList] = useState<Study[]>([]);

  useEffect(() => {
    // simular una comunicacion con una appi
    setTimeout(() => {

      setStudyList(studyData);

    }, 1000);

  
  }, [])

  return (
    <Fragment>
      <div className="container mx-auto my-10">
        <div className="mx-10 lg:mx-0">
          <h1 className="mb-12 text-center text-3xl font-bold uppercase">Estudios</h1>

          <div className="grid justify-items-center md:grid-cols-2 gap-5">
            {studyList.length > 0 && studyData.map((s, index) => (
              <StudyCard key={index} data={s} />
            ))}

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default _ContainerStudy
