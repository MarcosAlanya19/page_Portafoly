import { Study } from "../domain/study.interfaces"

interface MyProps {
  data: Study
}
export const StudyCard = ({ data: { description, title, year } }: MyProps) => {
  return (
    <div className="border border-black rounded-full overflow-hidden lg:w-96  lg:rounded-2xl">
      <div className="grid grid-cols-2 items-center justify-items-center lg:grid-rows-2 lg:grid-cols-none min-w-sm py-5">
        <div>
          <img className="w-32 lg:w-56" src="./img/certus.png" alt="img_study" />
        </div>

        <div className="lg:my-auto lg:text-center">
          <h2 className="lg:text-2xl font-bold">{title}</h2>
          <p>{description}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  )
}
