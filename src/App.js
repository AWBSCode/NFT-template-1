import HeroIntro from "./componets/home/herointro/HeroIntro";
import Collection from "./componets/home/featuredItems/Collection";
import About from "./componets/home/about/About";
import Steps from './componets/home/steps/Steps'
import Sellers from "./componets/home/sellers/Sellers";

function App() {
  return (
    <div className="App">
      <HeroIntro />
      <Collection />
      <About />
      <Steps />
      <Sellers />
    </div>
  );
}

export default App;
