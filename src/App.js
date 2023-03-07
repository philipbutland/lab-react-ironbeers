import "./App.css"; 
import Home from "./pages/Home";
import Beers from "./pages/Beers"
import NewBeer from "./pages/NewBeer";
import RandomBeer from "./pages/RandomBeer";
import { Routes, Route } from "react-router-dom"; 
 
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<Beers />}></Route>      
        <Route path="/newbeer" element={<NewBeer />}></Route>      
        <Route path="/randombeer" element={<RandomBeer />}></Route>      
      </Routes>
    </div>
  );
}
 
export default App;