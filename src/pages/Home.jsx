import { NavLink } from "react-router-dom";
import beers from "../assets/beers.png"
import randombeer from "../assets/random-beer.png"
import newbeer from "../assets/new-beer.png"
 
function Home() {
  return (
    <div>
     <div className="beerpic">
          <NavLink to="/beers">
            <img src={beers} alt="Beers"></img>
          </NavLink>
          <h2>Beers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis. Nunc sed velit dignissim sodales ut.</p>
      </div>

      <div className="beerpic">
          <NavLink to="/randombeer">
            <img src={randombeer} alt="Random Beer"></img>
          </NavLink>
          <h2>Random Beer</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis. Nunc sed velit dignissim sodales ut.</p>
      </div>

      <div className="beerpic">
          <NavLink to="/newbeer">
            <img src={newbeer} alt="New Beer"></img>
          </NavLink>
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis convallis convallis. Nunc sed velit dignissim sodales ut.</p>
      </div>
    </div>
  );
}
 
export default Home;