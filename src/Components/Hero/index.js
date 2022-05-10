import "./index.css";
import dauphin from "../../assets/dauphin.jpg";

const Hero = () => {
  return (
    <div
      className="containerHero"
      style={{ backgroundImage: `url(${dauphin})` }}
    >
      <span>Mon texte centré</span>
    </div>
  );
};

export default Hero;
