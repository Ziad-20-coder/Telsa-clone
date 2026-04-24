import Hero from "./Components/Hero"
import Navigation from "./Components/Navigation"
import Card from "./Components/UI/Carousel/Card"
import Carousel from "./Components/UI/Carousel/Carousel"
import type { SnapCarousel } from "./Types/services"

function App() {

  return (
    <>
      <Navigation />
      <Hero />
      <Carousel<SnapCarousel> renderItems={() => <Card />} url={'/src/data/Carousel1.json'}/>
    </>
  )
}

export default App
