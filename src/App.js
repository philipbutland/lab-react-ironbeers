import "./App.css"; 
import Home from "./pages/Home";
import Beers from "./pages/Beers"
import BeerDetails from "./pages/BeerDetails";
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import { Routes, Route } from "react-router-dom"; 
 
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />   
        <Route path='/beers/:beerId' element={<BeerDetails />} />   
        <Route path="/newbeer" element={<NewBeer />} />      
        <Route path="/randombeer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}
 
export default App;