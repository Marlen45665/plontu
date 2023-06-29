import "./Navigation.css"
import { Link } from "react-router-dom";

function Navigation(){
    return(
        <section className="navigation">
            <div className="navigation-wrapper">
                <Link to={"/"} className="navigation-icon" style={{textDecoration: "none", color: "black"}}>PLONTU</Link>
            </div>
        </section>
    )
}

export default Navigation;