import "./Card.css"

function Card(props){

    return(
        <div className="card-content">
            <div className="card-wrapper">
                <img className="card-avatar" src={props.avatarImg} alt="k"/>
                <div className="card-name">{props.name}</div>
                <div className="card-hashtag">#{props.hashtag}</div>
                <div className="check"></div>
            </div>
        </div>
    )
}
export default Card;