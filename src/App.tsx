import Hero from "./Components/Hero";
import Navigation from "./Components/Navigation";
import Card from "./Components/UI/Carousel/Card";
import Carousel from "./Components/UI/Carousel/Carousel";
import type { SnapCarousel } from "./Types/services";

function App() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <Hero />
      <Carousel<SnapCarousel>
        renderItems={({ image, header, pLink, tag, mainBTN, subBTN }) => (
          <Card
            image={image}
            header={header}
            description={pLink}
            tag={tag}
            mainBTN={mainBTN}
            subBTN={subBTN}
          />
        )}
        url={"/src/data/Carousel1.json"}
      />
    </div>
  );
}

export default App;
