import GoHome from "../component/GoHome"
import axios from 'axios'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer(){

    const [name,setName] = useState('')
    const [tagline,setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed,setFirst_brewed] = useState('')
    const [brewers_tips,setBrewers_tips] = useState('')
    const [attenuation_level,setAttenuation_level] = useState(0)
    const [contributed_by,setContributed_by] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        const postedBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level: Number(attenuation_level), contributed_by}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',postedBeer)
        .then(()=>{
            setName("")
            setTagline("")
            setDescription("")
            setFirst_brewed("")
            setBrewers_tips("")
            setAttenuation_level(0)
            setContributed_by("")

            navigate("/beers")
            alert("New beer successfully saved to database!")
        })
    }

    return(
        <div>
            <GoHome></GoHome>
            <h1>New Beer</h1>
            <form action="" onSubmit={handleSubmit}>

                <label htmlFor="" className="beerInput" >
                    Name
                    <input type="text" className="beerInputField" value={name} onChange={(e)=>setName(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInput">
                    Tagline
                    <input type="text" className="beerInputField" value={tagline} onChange={(e)=>setTagline(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInput">
                    Description
                    <input type="text" className="beerInputField" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </label>
                <label htmlFor="" className="beerInput" >
                    First Brewed
                    <input type="text" className="beerInputField" value={first_brewed} onChange={(e)=>setFirst_brewed(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInput">
                    Brewer's Tips
                    <input type="text" className="beerInputField" value={brewers_tips} onChange={(e)=>setBrewers_tips(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInput">
                    Attenuation Level
                    <input type="number" className="beerInputField" value={attenuation_level} onChange={(e)=>setAttenuation_level(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInput">
                    Contributed by
                    <input type="text" className="beerInputField" value={contributed_by} onChange={(e)=>setContributed_by(e.target.value)}/>
                </label>
                <button className="beerButton">Add New Beer</button>
            </form>
        </div>
    )
}

export default NewBeer