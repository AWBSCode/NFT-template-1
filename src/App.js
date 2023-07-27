import HeroIntro from "./componets/home/herointro/HeroIntro";
import Collection from "./componets/home/featuredItems/Collection";
import About from "./componets/home/about/About";
import Features from "./componets/home/features/Features";

function App() {
  return (
    <div className="App">
      <HeroIntro />
      <Collection />
      <About />
      <Features />
    </div>
  );
}

export default App;
