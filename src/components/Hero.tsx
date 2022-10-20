const Hero = () => {
  return (
    <>
      <section >
        <div className="bg-blue-900">
          <div className="grid md:grid-cols-2 items-center pt-8">

            <div>
              <img loading="lazy" src="./img/developer.svg" className="w-44 md:w-80 lg:w-7/12 mx-auto" alt="img__developer" />
            </div>

            <div className="md:mr-5 lg:mr-28">
              <div className="text-center text-white mt-5 mx-auto my-auto">
                <h1 className="font-black text-3xl lg:text-5xl">FRONT-END DEVELOPER</h1>
                <h1 className="font-bold text-2xl lg:text-4xl">Marcos Alanya Pacheco</h1>
                <h2 className="py-3 mx-9 lg:text-2xl">HTML | CSS | SASS | JavaScript | TypeScript | GitHub | Tailwind | Bootstrap </h2>
              </div>
            </div>

          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1E3A8A" fillOpacity="1" d="M0,128L30,138.7C60,149,120,171,180,165.3C240,160,300,128,360,133.3C420,139,480,181,540,186.7C600,192,660,160,720,138.7C780,117,840,107,900,122.7C960,139,1020,181,1080,170.7C1140,160,1200,96,1260,69.3C1320,43,1380,53,1410,58.7L1440,64L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      </section>
    </>
  )
}

export default Hero
