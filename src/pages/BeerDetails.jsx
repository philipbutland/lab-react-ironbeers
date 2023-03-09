import { useState, useEffect } from 'react';  
import GoHome from "../component/GoHome"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SingleBeer from './SingleBeer';

function BeerDetails () {

    // const [beers, setBeers] = useState([]);
    const [oneBeer, setOneBeer] = useState();
    const { beerId } = useParams();

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((result)=>{
            setOneBeer(result.data)
        })
    },[])

    return(
        <div>
            <GoHome></GoHome>
            <h1>Selected Beer</h1>
            <SingleBeer beer={oneBeer}></SingleBeer>
        </div>

    )


}

export default BeerDetails