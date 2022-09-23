import Hero from "./components/_Hero"
import Footer from "./components/_Footer"
import ContainerProyect from "./containers/_ContainerProyect"
import ContainerStudy from "./containers/_ContainerStudy"

function App() {

  return (
    <div className="App">
      <Hero />
      <ContainerStudy />
      <ContainerProyect />
      <Footer />
    </div>
  )
}

export default App
