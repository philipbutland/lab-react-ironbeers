function SingleBeer(props) {

    return(
        <div>
            {props.beer && (
                <div>
                    <img src={props.beer.image_url} alt="Beer" className="singleBeerPic"></img>
                    <div className="beerTextBox">
                        <div className="beerName">{props.beer.name}</div>
                            <div className="beerTagAndBrewed">
                                <div className="beerTagline">{props.beer.tagline}</div>
                                <div className="beerFirstBrewed">{props.beer.first_brewed}</div>
                            </div>
                            <div className="beerDescription">{props.beer.description}</div>
    
                            <div className="beerAttenuationContributed"><b>Attenuation level: </b>{props.beer.attenuation_level}</div>
                            <div className="beerAttenuationContributed"><b>Contributed by: </b>{props.beer.contributed_by}</div>
                        </div>
                    </div>
                )}
            </div>
        )
}

export default SingleBeer