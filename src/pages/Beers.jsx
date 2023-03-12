import GoHome from "../component/GoHome"
import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


function Beers(){

    const [beers, setBeers] = useState([]);
    const [searchText, setSearchText] = useState([]);

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((result)=>{
            setBeers(result.data)
        })
    },[])
    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchText}`)
        .then((result)=>{
            setBeers(result.data)
        })

    },[searchText])

    return(
        <div>
            <GoHome></GoHome>
            <h1>All Beers</h1>
            Search for a beer: <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
            <br />
            <br />
            {beers.length === 0 && <h2>Loading...</h2>}
            {beers.length > 0 && beers.map((oneBeer)=>{
                return(
                    <div key={oneBeer._id}>
                        <h2>{oneBeer.name}</h2>
                        <NavLink to={`./${oneBeer._id}`}>
                        <img src={oneBeer.image_url} alt="Beer" className="oneBeerPic"></img>
                        </NavLink>
                        <p className="beerInfo"><b>Tagline: </b>{oneBeer.tagline}</p>
                        <p className="beerInfo"><b>Contributed by: </b>{oneBeer.contributed_by}</p>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default Beers