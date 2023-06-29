import "./MainPage.css"
import Card from "../../card/cardUser/Card"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MainPage(){
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch("http://localhost:3001/user")
        .then(res => res.json())
        .then(res => setCard(res))
    }, [])
    

    return(
        <div className="card">
            {card.map(item => {
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