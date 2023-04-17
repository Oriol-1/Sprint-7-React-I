
import Welcome from "./paginas/Welcome";
import Presupuesto from "./paginas/Presupuesto";
import { Routes, Route } from "react-router-dom";





function App() {

  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/presupuesto" element={<Presupuesto />} />

      </Routes>
       
    
 
    </div>
  );
}
export default App;


