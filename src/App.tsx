import Hero from "./Components/Hero"
import Navigation from "./Components/Navigation"
import Carousel from "./Components/UI/Carousel/Carousel"

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <Carousel url={'/src/data/Carousel1.json'}/>
    </>
  )
}

export default App
