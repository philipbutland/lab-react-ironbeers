import GoHome from "../component/GoHome"
import axios from 'axios'
import { useState } from "react";


function NewBeer(){

    const [name,setName] = useState('')
    const [tagline,setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed,setFirst_brewed] = useState('')
    const [brewers_tips,setBrewers_tips] = useState('')
    const [attenuation_level,setAttenuation_level] = useState(0)
    const [contributed_by,setContributed_by] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        const postedBeer = {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by}
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new',postedBeer)
        .then(()=>{
            setName("")
            setTagline("")
            setDescription("")
            setFirst_brewed("")
            setBrewers_tips("")
            setAttenuation_level(0)
            setContributed_by("")

            alert("New beer successfully saved to database!")
        })
    }

    return(
        <div>
            <GoHome></GoHome>
            <h1>New Beer</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" className="beerInputField" >
                    <div className="beerLabel">Name</div>
                    <input className="beerInput" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInputField">
                    <div className="beerLabel">Tagline</div>
                    <input className="beerInput" type="text" value={tagline} onChange={(e)=>setTagline(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInputField">
                    <div className="beerLabel">Description</div>
                    <input className="beerHighInput" type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                </label>
                <label htmlFor="" className="beerInputField" >
                    <div className="beerLabel">First Brewed</div>
                    <input className="beerInput" type="text" value={first_brewed} onChange={(e)=>setFirst_brewed(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInputField">
                    <div className="beerLabel">Brewer's Tips</div>
                    <input className="beerInput" type="text" value={brewers_tips} onChange={(e)=>setBrewers_tips(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInputField">
                    <div className="beerLabel">Attenuation Level</div>
                    <input className="beerInput" type="text" value={attenuation_level} onChange={(e)=>setAttenuation_level(e.target.value)}/>
                </label> 
                <label htmlFor="" className="beerInputField">
                    <div className="beerLabel">Contributed by</div>
                    <input className="beerInput" type="text" value={contributed_by} onChange={(e)=>setContributed_by(e.target.value)}/>
                </label> 
                <button className="beerButton">Add New Beer</button>
            </form>
        </div>
    )
}

export default NewBeer