import "./MainPage.css"
import Card from "../../card/cardUser/Card"
import { Link } from "react-router-dom";
import db from "../../../db.json"

function MainPage(){
    const {user} = db
    return(
        <div className="card">
            {user.map(item => {
                return <Link 
                    key={item.id} 
                    to={`/user/${item.id}`} 
                    style={{textDecoration: "none"}}>
                        <Card name={item.userName} hashtag={item.hashtag} avatarImg={item.img}/>
                    </Link>})}
        </div>
    )
}
export default MainPage;