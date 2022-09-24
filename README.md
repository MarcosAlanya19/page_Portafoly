# page_Portafolio

<div className="border border-black overflow-hidden rounded-lg hover:scale-105 duration-300">
        <div className="flex flex-col items-center">
          <a  href={linkPage} target="_blank">
            <img className="w-screen object-cover h-56 md:h-80 cursor-pointer top-auto" src={img} alt="img_page" />
          </a>

          <div className="border-t border-black w-full text-center text-white bg-secundario">
            <div className="font-bold uppercase py-1">
              <a className="cursor-default" href={linkGH}>{title}</a>
            </div>

            <div className="border-t border-black py-1">
              <p className="cursor-default">{description}</p>
            </div>
          </div>
        </div>
      </div>
