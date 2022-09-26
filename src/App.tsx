import Hero from "./components/Hero"
import Footer from "./components/Footer"
import ContainerProyect from "./containers/ContainerProyect"
import ContainerStudy from "./containers/ContainerStudy"
import ContainerCertificate from "./containers/ContainerCertificate"
function App() {

  
  return (
    <div className="App">
      <Hero />
      <ContainerProyect />
      <ContainerStudy />
      <ContainerCertificate />
      <Footer />
    </div>
  )
}

export default App
