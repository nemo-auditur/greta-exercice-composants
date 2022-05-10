import './index.css'

const Card = (props) => {
    
    return(
        <>
        <div className="containerCard">props : {props.name}
            <div className="imageContainer">
                <img src={props.urlImage}/>
            </div>
        </div>
        </>
    )
}

export default Card