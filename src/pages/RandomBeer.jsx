import GoHome from "../component/GoHome"
import { useState, useEffect } from "react";
import axios from "axios";
import SingleBeer from "./SingleBeer";

function RandomBeer(){

    const [randomBeer, setRandomBeer] = useState();

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
        .then((result)=>{
            setRandomBeer(result.data)
        })
    },[])
    
    return(
        <div>
            <GoHome></GoHome>
            <h1>Random Beer</h1>
            <SingleBeer beer={randomBeer}></SingleBeer>
        </div>
    )
}

export default RandomBeer