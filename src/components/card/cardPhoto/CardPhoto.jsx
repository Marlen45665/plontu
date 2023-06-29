import "./CardPhoto.css"



function CardPhoto(props){
    return(
        <div className="CardPhoto" >
            {props.children}
            <div className="CardPhoto-bottom">{props.name}</div>
        </div>
    )
}
export default CardPhoto;