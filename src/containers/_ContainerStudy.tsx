import { Fragment } from "react"
import Study from "../components/_Study"

const _ContainerStudy = () => {
  return (
    <Fragment>
      <div className="container mx-auto my-10">
        <div className="mx-10 lg:mx-0">
          <h1 className="mb-12 text-center text-3xl font-bold uppercase">Estudios</h1>
          <div className="grid justify-items-center md:grid-cols-2 gap-5">
            <Study />
            <Study />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default _ContainerStudy
