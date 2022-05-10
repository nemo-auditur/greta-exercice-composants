// import du style
import './index.css'

const Card = (props) => {
    // Le props dans les '()' permet de récupérer les données 
    // envoyées depuis Carousel
    return(
        <>
        {/* les éléments entre {} sont des données variables qui viennent des props */}
        {/* Ici on utilise props.name et props.urlImage */}
        <div className="containerCard">props : {props.name}
            <div className="imageContainer">
                <img src={props.urlImage}/>
            </div>
        </div>
        </>
    )
}

export default Card