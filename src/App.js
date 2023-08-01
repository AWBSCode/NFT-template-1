import HeroIntro from "./componets/home/herointro/HeroIntro";
import FeaturedCollection from "./componets/home/featuredItems/Collection";
import About from "./componets/home/about/About";
import Steps from './componets/home/steps/Steps'
import Sellers from "./componets/home/sellers/Sellers";
import Collection from "./componets/home/collection/Collection";
import Footer from "./componets/home/footer/Footer";

function App() {
  return (
    <div className="App">
      <HeroIntro />
      <FeaturedCollection />
      <About />
      <Steps />
      <Sellers />
      <Collection />
      <Footer />
      <br />
    </div>
  );
}

export default App;
