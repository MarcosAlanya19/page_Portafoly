import Hero from "./components/Hero"
import Footer from "./components/Footer"
import ContainerProyect from "./containers/ContainerProyect"
import ContainerStudy from "./containers/ContainerStudy"
function App() {

  
  return (
    <div className="App">
      <Hero />
      <ContainerProyect />
      <ContainerStudy />
      <Footer />
    </div>
  )
}

export default App
