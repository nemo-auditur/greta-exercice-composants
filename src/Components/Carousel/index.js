//import de variables
import bags from "../../assets/dataBase.js";
//import de mes composants
import Card from "../Card";
//import des styles
import './index.css'

const Carousel = () => {
  console.log("ULR dans Carousel", bags[0].url);
  return (
    <>
      <div className="containerCarousel">
        Carousel
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
