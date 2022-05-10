//import de variables
import bags from "../../assets/dataBase.js";
//import de Card dans Carousel
import Card from "../Card";
//import des styles
import './index.css'

const Carousel = () => {
  return (
    <>
      <div className="containerCarousel">
        {/* On peut utiliser plusieurs fois un composant  */}
        {/* Ici on passes des props au composant Card */}
        {/* Les props passées sont urlImage et name */}
        <Card urlImage={bags[0].url} name={bags[0].name} />
        <Card urlImage={bags[1].url} name={bags[1].name} />
        <Card urlImage={bags[2].url} name={bags[2].name} />
        <Card urlImage={bags[3].url} name={bags[3].name} />
        <Card urlImage={bags[3].url} name={bags[3].name} />
        <Card urlImage={bags[3].url} name={bags[3].name} />
        <Card urlImage={bags[3].url} name={bags[3].name} />
      </div>
    </>
  );
};

export default Carousel;
