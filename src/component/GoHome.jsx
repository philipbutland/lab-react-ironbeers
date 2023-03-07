import homeIcon from "../assets/GoHome.png"
import { NavLink } from "react-router-dom"

function GoHome() {
    return(
        <div>
            <NavLink to="/">
                <img src={homeIcon} alt="Home Icon"></img>
            </NavLink>
        </div>
    )
}

export default GoHome