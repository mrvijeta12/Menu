import Navbar from "./Components/Navbar";
import All from "./Components/All";
import Breakfast from "./Components/Breakfast";
import Shakes from "./Components/Shakes";
import Lunch from "./Components/Lunch";
import { Route, Routes } from "react-router-dom";
import './style.css'


function App() {
  return (
    <div>
     
     <Navbar/>

     <Routes>
      <Route path= "/" element={<All/>}/>
      <Route path= "/breakfast" element={<Breakfast/>}/>
      <Route path= "/shakes" element={<Shakes/>}/>
      <Route path= "/lunch" element={<Lunch/>}/>
     </Routes>

   
    
    </div>
  );
}

export default App;
