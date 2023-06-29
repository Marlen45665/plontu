import "./Header.css"


function UserPage(props){
    return( 
        <>
            <div className="header">
                <div className="header-wrapper">
                    <img className="card-avatar" src={props.avatarImg} alt="k"/>
                    <div className="header-name">{props.name}</div>
                    <div className="header-check"></div>
                </div>
            </div>
            <div className="hashtag-wrapper">
                <div className="header-hashtag">#{props.hashtag}</div> 
            </div> 
        </>
    )   
}
export default UserPage;