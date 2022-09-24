import { Fragment } from "react"
import { Study } from "../domain/study.interfaces"

interface MyProps {
  data: Study
}
export const StudyCard = ({ data: { title, img , course, state, year, certificate} }: MyProps) => {
  return (
    <Fragment>
      <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
        <img className="object-cover w-full md:w-40 h-56 rounded-t-lg md:h-60 lg:w-48 md:rounded-none md:rounded-l-lg" src={img} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal w-72">
          <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{title}</h5>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <p>{course}</p>
            <p>{state}</p>
            <p>{year}</p>
            {certificate && <a href={certificate} className="font-bold text-sky-300 hover:text-sky-500" target="_blank">CONSTANCIA</a>}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
