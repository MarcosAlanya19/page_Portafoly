import Hero from "./components/Hero"
import Footer from "./components/Footer"
import ContainerProyect from "./components/containers/ContainerProyect"
import ContainerStudy from "./components/containers/ContainerStudy"
import ContainerCertificate from "./components/containers/ContainerCertificate"
function App() {

  
  return (
    <div className="App">
      <Hero />
      <ContainerProyect/>
      <ContainerStudy/>
      <ContainerCertificate/>
      <Footer />
    </div>
  )
}

export default App
