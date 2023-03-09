import GoHome from "../component/GoHome"
import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


function Beers(){

    const [beers, setBeers] = useState([]);

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((result)=>{
            setBeers(result.data)
        })
    },[])

    return(
        <div>
            <GoHome></GoHome>
            <h1>All Beers</h1>
            {beers.map((oneBeer)=>{
                return(
                    <div key={oneBeer._id}>
                        <h2>{oneBeer.name}</h2>
                        <NavLink to={`./${oneBeer._id}`}>
                        <img src={oneBeer.image_url} alt="Beer" className="oneBeerPic"></img>
                        </NavLink>
                        <p><b>Tagline: </b>{oneBeer.tagline}</p>
                        <p><b>Contributed by: </b>{oneBeer.contributed_by}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Beers