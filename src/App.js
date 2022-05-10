// imports divers
import "./App.css";

//imports de mes composants
import Carousel from './Components/Carousel'
import Header from "./Components/Header";
import Hero from "./Components/Hero"

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Carousel/>
    </div>
  );
}

export default App;
