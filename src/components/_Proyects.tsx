import { Fragment } from "react"

const _Proyects = () => {
  return (
    <Fragment>
      <div className="border border-black overflow-hidden rounded-lg hover:scale-105 duration-300">
        <div className="flex flex-col items-center">
          <div className="bg-cover">
            <img className="w-screen object-cover h-full cursor-pointer" src="./img/AppComida.jpg" alt="img_page" />
          </div>
          <div className="border-t border-black w-full text-center text-white bg-secundario">
            <div className="font-bold uppercase py-1">
              <a className="cursor-default" href="#">GH: App Comida</a>
            </div>
            <div className="border-t border-black py-1">
              <a className="cursor-default" href="#">HTML - CSS - SCSS</a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default _Proyects
